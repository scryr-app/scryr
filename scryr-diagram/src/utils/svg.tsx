import { useTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";

export function Svg(
  { svgImg, scale = 1, ...meshProps }: {
    svgImg: string;
    scale?: number | [number, number, number];
  } & MeshProps,
) {
  const texture = useTexture(svgImg);
  return (
    <mesh scale={scale} {...meshProps}>
      <planeGeometry args={[0.3, 0.3]} />
      <meshStandardMaterial map={texture} transparent />
    </mesh>
  );
}
