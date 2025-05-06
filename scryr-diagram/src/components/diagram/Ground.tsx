import { currentDiagramTheme } from "../../theme/index.ts";

export function Ground() {
  return (
    <mesh
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]} // Adjusted position to center the ground
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={currentDiagramTheme.surface} />
    </mesh>
  );
}
