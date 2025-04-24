import { Canvas } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Line } from "@react-three/drei";
import {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import { useFrame, useThree } from "@react-three/fiber";
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

function DebugInfo() {
  const { gl, scene, camera } = useThree();

  useEffect(() => {
    // Ensure the scene is rendered before capturing
    gl.render(scene, camera);
    const screenshot = gl.domElement.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = screenshot;
    link.click();
    // Only run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

function DownloadButton() {
  // Instead of using context, directly access the canvas DOM node
  const handleDownload = () => {
    // Find the canvas element rendered by react-three-fiber
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const screenshot = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = screenshot;
    link.click();
  };

  return (
    <button
      className="
        fixed bottom-10 right-10 z-20
        px-10 py-4
        rounded-[2rem]
        shadow-xl
        bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#a1c4fd]
        text-[#3b3054]
        text-2xl font-extrabold
        tracking-widest
        border-4 border-[#b993d6]/40
        ring-4 ring-[#fbc2eb]/40
        hover:scale-105
        hover:shadow-[0_0_40px_12px_rgba(186,85,211,0.18)]
        transition-all duration-300
        backdrop-blur-[2px]
        before:content-[''] before:absolute before:inset-0 before:rounded-[2rem] before:border before:border-[#fff6] before:pointer-events-none
      "
      onClick={handleDownload}
    >
      <span className="relative z-10">
        <svg
          className="inline-block mr-3 -mt-1"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b993d6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 4px #fff6)" }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
        Download
      </span>
    </button>
  );
}

function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-8 bg-gradient-to-r from-[#e0c3fc]/80 via-[#8ec5fc]/80 to-[#a1c4fd]/80 shadow-lg z-30 backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/src/assets/scryr_logo.png"
          alt="Scryr Logo"
          className="h-12 w-12 rounded-full shadow-lg border-2 border-[#b993d6]/60 bg-white/70"
        />
        <span
          className="text-3xl font-extrabold text-[#3b3054] drop-shadow-lg tracking-widest"
          style={{
            fontFamily: "'Cinzel Decorative', 'Parisienne', cursive, serif",
          }}
        >
          Scryr
        </span>
      </div>
      {/* Right side buttons */}
      <div className="flex items-center gap-6">
        {/* Diagrams button */}
        <button
          className="relative px-6 py-2 rounded-2xl bg-gradient-to-br from-[#a1c4fd] via-[#b993d6] to-[#fbc2eb] text-[#3b3054] font-bold text-lg shadow-md border-2 border-[#fff6] hover:scale-105 transition-all duration-200
            before:absolute before:inset-0 before:rounded-2xl before:border before:border-[#fff3] before:pointer-events-none"
          style={{
            fontFamily: "'Cinzel Decorative', 'Parisienne', cursive, serif",
            letterSpacing: "0.08em",
            textShadow: "0 1px 6px #fff8, 0 0 8px #b993d6",
          }}
        >
          <span className="inline-block mr-2">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="#b993d6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="7" height="7" rx="2" />
              <rect x="14" y="3" width="7" height="7" rx="2" />
              <rect x="14" y="14" width="7" height="7" rx="2" />
              <rect x="3" y="14" width="7" height="7" rx="2" />
            </svg>
          </span>
          My Diagrams
        </button>
        {/* User login button */}
        <button
          className="relative px-6 py-2 rounded-2xl bg-gradient-to-br from-[#fbc2eb] via-[#a1c4fd] to-[#b993d6] text-[#3b3054] font-bold text-lg shadow-md border-2 border-[#fff6] hover:scale-105 transition-all duration-200
            before:absolute before:inset-0 before:rounded-2xl before:border before:border-[#fff3] before:pointer-events-none"
          style={{
            fontFamily: "'Cinzel Decorative', 'Parisienne', cursive, serif",
            letterSpacing: "0.08em",
            textShadow: "0 1px 6px #fff8, 0 0 8px #b993d6",
          }}
        >
          <span className="inline-block mr-2">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="#b993d6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M2 20c0-4 8-6 10-6s10 2 10 6" />
            </svg>
          </span>
          Login
        </button>
      </div>
    </div>
  );
}

function App() {
  // Example usage of useThree in the render tree

  // You can use these objects for debugging or logic
  // For now, just return null (or add overlays/info as needed)

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#fff",
        position: "relative",
      }}
    >
      <TopBar />
      <Canvas
        camera={{ position: [8, 8, 8], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ marginTop: "5rem" }}
      >
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
      <DownloadButton />
    </div>
  );
}

export default App;
