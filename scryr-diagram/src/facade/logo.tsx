import { Svg } from "../utils/svg.tsx";
import { GroupProps } from "@react-three/fiber";

// Accept both import and string path for svgImg
export function LogoOrnament(
  { imgPath, link, ...groupProps }:
    & { imgPath: string; link?: string }
    & GroupProps,
) {
  const handlePointerDown = () => {
    if (link) {
      globalThis.open(link, "_blank");
    }
  };
  return (
    <group {...groupProps}>
      <mesh onPointerDown={link ? handlePointerDown : undefined}>
        <Svg svgImg={imgPath} />
      </mesh>
    </group>
  );
}
