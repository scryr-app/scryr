import { Canvas } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

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

// Simple road as a thin, flat box
function Road({
  position,
  size,
}: {
  position: [number, number, number];
  size: [number, number, number];
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color="#444" />
    </mesh>
  );
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

  // Roads: horizontal and vertical
  const roads = [
    // Horizontal
    { pos: [0, 0, -3], size: [10, 0.1, 0.7] },
    { pos: [0, 0, 1], size: [10, 0.1, 0.7] },
    // Vertical
    { pos: [-3, 0, 0], size: [0.7, 0.1, 10] },
    { pos: [1, 0, 0], size: [0.7, 0.1, 10] },
  ];

  return (
    <>
      <Ground />
      {roads.map((r, i) => (
        <Road
          key={i}
          position={r.pos as [number, number, number]}
          size={r.size as [number, number, number]}
        />
      ))}
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
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#fff" }}>
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
