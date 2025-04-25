import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Town } from "./components/Town";
import { TopBar } from "./components/TopBar";
import { DownloadButton } from "./components/DownloadButton";

function App() {
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
