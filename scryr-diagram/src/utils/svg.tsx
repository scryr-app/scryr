import { useTexture } from "@react-three/drei";

export function Svg({ svgImg }: { svgImg: string }) {
  const texture = useTexture(svgImg);
  return (
    <mesh position={[0, -0.7, 0.52]}>
      <planeGeometry args={[0.6, 0.6]} />
      <meshStandardMaterial map={texture} transparent />
    </mesh>
  );
}
