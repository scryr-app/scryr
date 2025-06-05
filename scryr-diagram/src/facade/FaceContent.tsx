import { Text } from "@react-three/drei";
import { currentTheme } from "../neighborhood/theme.ts";
import { LinkingOrnament } from "./facadeType.ts";
import { LogoOrnament } from "./logo.tsx";

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
        <LogoOrnament
          imgPath="/icons/github-dark.svg"
          position={[0, -0.15, 0]}
          link={sourceCodeUrl.link}
        />
      )}
    </group>
  );
}
