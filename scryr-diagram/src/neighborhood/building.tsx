import { RoundedBox, Text } from "@react-three/drei";
import { FaceContent } from "../facade/index.tsx";
import { LinkingOrnament } from "../facade/facadeType.ts";
import { LogoOrnament } from "../facade/logo.tsx";
import { Svg } from "../utils/svg.tsx";
import { Box, Flex } from "@react-three/flex";

export function Building({
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
  sourceCodeUrl?: LinkingOrnament;
  fontColor: string;
  fontFace: string;
  svgIcon?: string; // Now expects a URL to the SVG
}) {
  const wd = 3;
  const ht = 2;
  const dp = 1;

  const showBlockFaceContent = description || version || sourceCodeUrl;

  return (
    <group position={position}>
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
      {showBlockFaceContent && (
        <>
          <FaceContent
            description={description}
            version={version}
            sourceCodeUrl={sourceCodeUrl}
          />
          <Svg svgImg="/icons/android.svg" />
        </>
      )}
      <RoundedBox args={[ht, wd, dp]} radius={0.08} smoothness={4}>
        <meshStandardMaterial color={color} />
      </RoundedBox>
    </group>
  );
}
