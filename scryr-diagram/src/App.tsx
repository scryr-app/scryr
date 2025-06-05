import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Neighborhood } from "./neighborhood/index.tsx";

function App() {
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    if (!cameraRef.current) return;
    const logCamera = () => {
      const cam = cameraRef.current;
      if (cam) {
        console.log("Camera position:", cam.position.toArray());
        if ("fov" in cam) {
          console.log("Camera fov:", cam.fov);
        }
      }
    };
    // Listen for camera changes (e.g., via OrbitControls)
    // You can also call logCamera manually or on demand
    // For demo, log once on mount
    logCamera();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#fff",
      }}
    >
      <Canvas
        // camera={{ position: [10, 10, 10], fov: 40 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ marginTop: "5rem" }}
      >
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          fov={40}
          position={[13, 12, 13]}
          near={0.1}
          far={1000}
        />
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Neighborhood />
        <OrbitControls
          target={[0, 0, 0]}
          maxPolarAngle={Math.PI / 2 - Math.PI / 18}
          minPolarAngle={0}
          onChange={() => {
            const cam = cameraRef.current;
            if (cam) {
              console.log("Camera position:", cam.position.toArray());
              if ("fov" in cam) {
                console.log("Camera fov:", cam.fov);
              }
            }
          }}
        />
      </Canvas>
    </div>
  );
}

export default App;
