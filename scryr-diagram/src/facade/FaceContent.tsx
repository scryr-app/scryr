import { Text } from "@react-three/drei";
import { Box, Flex } from "@react-three/flex";
import { useEffect, useState } from "react";
import { currentTheme } from "../neighborhood/theme.ts";
import { LinkingOrnament } from "./facadeType.ts";
import { Svg } from "../utils/svg.tsx";

export function FaceContent({
  description,
  sourceCodeUrl,
  version,
  language,
  frameworks,
}: {
  description?: string;
  version?: string;
  sourceCodeUrl?: LinkingOrnament;
  language?: LinkingOrnament;
  frameworks?: string[];
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

        {language && (
          <Box>
            <Flex flexDirection={"row"} alignContent={"center"}>
              <Box>
                <GlowSvg svgImg={language.icon || "/icons/bing.svg"}  />
              </Box>
              <group position={[0.2, 0, 0]}>
                <Box>
                  <GlowText>{language.name}</GlowText>
                </Box>
              </group>
            </Flex>
          </Box>
        )}
        {frameworks && frameworks.length > 0 && (
          <Box>
            <GlowText>{frameworks.join(", ")}</GlowText>
          </Box>
        )}
      </Flex>
    </group>
  );
}

// Elegant glow text component
function GlowText({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(1);

  // Animate scale on hover
  useEffect(() => {
    let frame: number;
    const animate = () => {
      setScale((prev) => {
        const target = hovered ? 1.1 : 1;
        const diff = target - prev;
        if (Math.abs(diff) < 0.001) return target;
        return prev + diff * 0.15; // Smooth interpolation
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [hovered]);

  return (
    <Text
      fontSize={0.09}
      color={hovered ? "#fff" : currentTheme.fontColor}
      anchorX="center"
      anchorY="middle"
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      outlineColor="#fff"
      outlineWidth={hovered ? "0.4%" : "0%"} // Even more subtle glow
      outlineBlur={hovered ? 0.06 : 0} // Even more subtle blur
      outlineOpacity={hovered ? 0.20 : 0} // Lower opacity for extra subtlety
    >
      {children}
    </Text>
  );
}

// Elegant glow SVG component
function GlowSvg(props: { svgImg: string }) {
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(.1);

  // Animate scale on hover
  useEffect(() => {
    let frame: number;
    const animate = () => {
      setScale((prev) => {
        const target = hovered ? 1.03 : 1;
        const diff = target - prev;
        if (Math.abs(diff) < 0.001) return target;
        return prev + diff * 0.15;
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [hovered]);

  return (
    <Svg
      {...props}
      scale={.4}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      // Use meshStandardMaterial's emissive for glow effect
      material-emissive={hovered ? "#fff" : undefined}
      material-emissiveIntensity={hovered ? 0.7 : 0}
    />
  );
}
