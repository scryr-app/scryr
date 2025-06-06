import { currentTheme } from "./theme.ts";

export function Ground() {
  return (
    <mesh
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]} // At the horizon (y=0)
    >
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color={currentTheme.surface} />
    </mesh>
  );
}
