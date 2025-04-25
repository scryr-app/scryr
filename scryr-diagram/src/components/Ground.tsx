export function Ground() {
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
