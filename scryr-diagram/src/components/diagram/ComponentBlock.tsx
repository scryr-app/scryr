import { Html, RoundedBox, Text } from "@react-three/drei";

export function SimpleBlock({
  position,
  color,
  name,
  description,
  version,
  sourceCodeUrl,
  fontColor,
}: {
  position: [number, number, number];
  color: string;
  name: string;
  description: string;
  version: string;
  sourceCodeUrl: string;
  fontColor: string;
  fontFace: string;
  svgIcon?: string; // Now expects a URL to the SVG
}) {
  const wd = 3;
  const ht = 2;
  const dp = 1;

  const showBlockFaceContent = description || version || sourceCodeUrl;

  // Compose block face content with labels for each present field
  let blockFaceContent = "";
  if (description) blockFaceContent += `Description: ${description}\n`;
  if (version) blockFaceContent += `Version: ${version}\n`;
  // Remove sourceCodeUrl from blockFaceContent, will render as link below

  return (
    <group position={position}>
      {/* Top label */}
      <Text
        position={[0, wd / 2 + 0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.2}
        color={fontColor}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
      {/* Side label (centered on the +Z face) */}
      {showBlockFaceContent && (
        <>
          <Text
            position={[0, 0.1, dp / 2 + 0.01]}
            rotation={[0, 0, 0]}
            fontSize={0.10}
            color={fontColor}
            anchorX="center"
            anchorY="middle"
            maxWidth={1.8}
            textAlign="center"
          >
            {blockFaceContent}
            {sourceCodeUrl && (
              <Text
                fontSize={0.09}
                onClick={() => window.open(sourceCodeUrl, "_blank")}
              >
                Source: {sourceCodeUrl}
              </Text>
            )}
          </Text>
        </>
      )}
      <RoundedBox args={[ht, wd, dp]} radius={0.08} smoothness={4}>
        <meshStandardMaterial color={color} />
      </RoundedBox>
    </group>
  );
}
