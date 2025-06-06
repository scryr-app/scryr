import { useTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";

export function Svg({ svgImg, ...meshProps }: { svgImg: string } & MeshProps) {
  const texture = useTexture(svgImg);
  return (
    <mesh {...meshProps}>
      <planeGeometry args={[0.6, 0.6]} />
      <meshStandardMaterial map={texture} transparent />
    </mesh>
  );
}
