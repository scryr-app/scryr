import { Canvas } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Line } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// House with rounded edges, floors flush until hover, then animate apart
function House({
  position,
  color = "#b5651d",
}: {
  position: [number, number, number];
  color?: string;
}) {
  const [hovered, setHovered] = useState(false);

  // When not hovered, all floors are flush (no gap)
  const targetSplit = hovered ? [0.7, 0, -0.7] : [0.3, 0, -0.3];
  const yRefs = [useRef<any>(), useRef<any>(), useRef<any>()];
  const yPositions = useRef([0.3, 0, -0.3]);

  useFrame(() => {
    for (let i = 0; i < 3; i++) {
      yPositions.current[i] += (targetSplit[i] - yPositions.current[i]) * 0.1;
      if (yRefs[i].current) {
        yRefs[i].current.position.y = yPositions.current[i];
      }
    }
  });

  return (
    <group
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Bottom floor */}
      <RoundedBox
        ref={yRefs[2]}
        args={[1, 0.3, 1]}
        radius={0.08}
        smoothness={4}
      >
        <meshStandardMaterial color={color} />
      </RoundedBox>
      {/* Middle floor */}
      <RoundedBox
        ref={yRefs[1]}
        args={[1, 0.3, 1]}
        radius={0.08}
        smoothness={4}
      >
        <meshStandardMaterial color="#fff2cc" />
      </RoundedBox>
      {/* Top floor */}
      <RoundedBox
        ref={yRefs[0]}
        args={[1, 0.3, 1]}
        radius={0.08}
        smoothness={4}
      >
        <meshStandardMaterial color="#b0c4de" />
      </RoundedBox>
    </group>
  );
}

// Curved connection line between two points
function CurvedConnection({
  start,
  end,
  color,
  offset = 0,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
  offset?: number;
}) {
  // Calculate a control point for the curve to make it arch above the ground
  const mid = [
    (start[0] + end[0]) / 2,
    0.1 + offset, // slightly above ground, offset for stacking
    (start[2] + end[2]) / 2,
  ];
  // Offset the curve in Y for each type
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(...start),
    new THREE.Vector3(mid[0], mid[1], mid[2]),
    new THREE.Vector3(...end)
  );
  const points = curve.getPoints(32);

  return <Line points={points} color={color} lineWidth={2} dashed={false} />;
}

function Connections({
  houses,
}: {
  houses: { pos: [number, number, number] }[];
}) {
  // Example: connect each house to the next with different types
  // Types: sewer (blue), water (cyan), electrical (yellow)
  const types = [
    { color: "#0074D9", offset: 0.03 }, // sewer
    { color: "#7FDBFF", offset: 0.06 }, // water
    { color: "#FFDC00", offset: 0.09 }, // electrical
  ];

  const lines = [];
  for (let i = 0; i < houses.length - 1; i++) {
    for (let t = 0; t < types.length; t++) {
      lines.push(
        <CurvedConnection
          key={`${i}-${t}`}
          start={houses[i].pos}
          end={houses[i + 1].pos}
          color={types[t].color}
          offset={types[t].offset}
        />
      );
    }
  }
  return <>{lines}</>;
}

function Ground() {
  return (
    <mesh
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.51, 0]}
    >
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#7ec850" />
    </mesh>
  );
}

function Town() {
  // House positions (grid-like, but with some variation)
  const houses = [
    { pos: [-4, 0.5, -4] },
    { pos: [-2, 0.5, -4] },
    { pos: [0, 0.5, -4] },
    { pos: [2, 0.5, -4] },
    { pos: [-4, 0.5, -2] },
    { pos: [2, 0.5, -2] },
    { pos: [-4, 0.5, 0] },
    { pos: [0, 0.5, 0] },
    { pos: [4, 0.5, 0] },
    { pos: [-2, 0.5, 2] },
    { pos: [2, 0.5, 2] },
    { pos: [0, 0.5, 4] },
    { pos: [4, 0.5, 4] },
  ];

  return (
    <>
      <Ground />
      <Connections houses={houses} />
      {houses.map((h, i) => (
        <House
          key={i}
          position={h.pos as [number, number, number]}
          color={i % 3 === 0 ? "#b5651d" : "#e3c16f"}
        />
      ))}
    </>
  );
}

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Callback ref to get the canvas after it's mounted
  const setCanvasRef = (node: HTMLDivElement | null) => {
    if (node) {
      const canvas = node.querySelector("canvas");
      if (canvas) {
        canvasRef.current = canvas as HTMLCanvasElement;
      }
    }
  };

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const link = document.createElement("a");
    link.download = "town.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <div
      ref={setCanvasRef}
      style={{
        width: "100vw",
        height: "100vh",
        background: "#fff",
        position: "relative",
      }}
    >
      <button
        style={{
          position: "absolute",
          zIndex: 10,
          top: 20,
          left: 20,
          padding: "10px 18px",
          fontSize: "1rem",
          borderRadius: 6,
          border: "1px solid #bbb",
          background: "#fff",
          cursor: "pointer",
          boxShadow: "0 2px 8px #0001",
        }}
        onClick={handleDownload}
      >
        Download the image
      </button>
      <Canvas camera={{ position: [8, 8, 8], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Town />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          target={[0, 0, 0]}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}

export default App;
