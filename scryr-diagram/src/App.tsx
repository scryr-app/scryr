import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Diagram } from "./components/diagram/Diagram.tsx";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#fff",
      }}
    >
      <Canvas
        camera={{ position: [8, 8, 8], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ marginTop: "5rem" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Diagram />
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
