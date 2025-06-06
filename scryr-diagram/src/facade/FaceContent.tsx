import { Text } from "@react-three/drei";
import { currentTheme } from "../neighborhood/theme.ts";
import { LinkingOrnament } from "./facadeType.ts";
import { LogoOrnament } from "./logo.tsx";
import { Svg } from "../utils/svg.tsx";

export function FaceContent({
  description,
  sourceCodeUrl,
  version,
}: {
  description?: string;
  version?: string;
  sourceCodeUrl?: LinkingOrnament;
}) {
  // Compose block face content with labels for each present field
  let blockFaceContent = "";
  if (description) blockFaceContent += `Description: ${description}\n`;
  if (version) blockFaceContent += `Version: ${version}\n`;
  // Remove sourceCodeUrl from blockFaceContent, will render as link below

  return (
    <group position={[0, 0.1, 0.51]}>
      {description && (
        <Text
          position={[0, 0.15, 0]}
          fontSize={0.09}
          color={currentTheme.fontColor}
          anchorX="center"
          anchorY="middle"
        >
          {description}
        </Text>
      )}
      {version && (
        <Text
          position={[0, -0.15, 0]}
          fontSize={0.09}
          color={currentTheme.fontColor}
          anchorX="center"
          anchorY="middle"
        >
          {version}
        </Text>
      )}
      {sourceCodeUrl && (
        <group position={[0, -0.3, 0]}>
          <Svg svgImg="/icons/github-dark.svg" />
        </group>
      )}
    </group>
  );
}
