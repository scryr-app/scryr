import { Text } from "@react-three/drei";
import { currentTheme } from "../neighborhood/theme.ts";
import { LinkingOrnament } from "./facadeType.ts";

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
    <Text
      position={[0, 0.1, 0.51]}
      rotation={[0, 0, 0]}
      fontSize={0.10}
      color={currentTheme.fontColor}
      anchorX="center"
      anchorY="middle"
      maxWidth={1.8}
      textAlign="center"
    >
      {blockFaceContent}
      {sourceCodeUrl && (
        <Text
          fontSize={0.09}
          onClick={() => globalThis.open(sourceCodeUrl.link, "_blank")}
        >
          Source: {sourceCodeUrl.name}
        </Text>
      )}
    </Text>
  );
}
