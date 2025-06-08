import { Text } from "@react-three/drei";
import { Box, Flex } from "@react-three/flex";
import { useState } from "react";
import { currentTheme } from "../neighborhood/theme.ts";
import { LinkingOrnament } from "./facadeType.ts";
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
      <Flex
        justifyContent="space-between"
        alignItems="center"
        size={[3, 2, 1]}
        centerAnchor
      >
        {description && (
          <Box>
            <GlowText>{description}</GlowText>
          </Box>
        )}
        {version && (
          <Box>
            <GlowText>{version}</GlowText>
          </Box>
        )}
        {sourceCodeUrl && (
          <Box centerAnchor>
            <GlowSvg svgImg="/icons/github-dark.svg" />
          </Box>
        )}
      </Flex>
    </group>
  );
}

// Elegant glow text component
function GlowText({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Text
      fontSize={0.09}
      color={hovered ? "#fff" : currentTheme.fontColor}
      anchorX="center"
      anchorY="middle"
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      outlineColor="#fff"
      outlineWidth={hovered ? "0.7%" : "0%"} // Even more subtle glow
      outlineBlur={hovered ? 0.08 : 0} // Even more subtle blur
      outlineOpacity={hovered ? 0.25 : 0} // Lower opacity for extra subtlety
    >
      {children}
    </Text>
  );
}

// Elegant glow SVG component
function GlowSvg(props: { svgImg: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Svg
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      // Use meshStandardMaterial's emissive for glow effect
      material-emissive={hovered ? "#fff" : undefined}
      material-emissiveIntensity={hovered ? 0.7 : 0}
    />
  );
}
