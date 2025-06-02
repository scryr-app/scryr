import { Svg } from "../utils/svg.tsx";

// Accept both import and string path for svgImg
export function LogoOrnament({ svgImg }: { svgImg: string }) {
  // If svgImg is a string path, just pass it to Svg
  return <Svg svgImg={svgImg} />;
}
