import { Html, RoundedBox, Text } from "@react-three/drei";
import { Box, Flex } from "@react-three/flex";
import { useFrame } from "@react-three/fiber";

import { useRef, useState } from "react";

export function SimpleBlock({
  position,
  color,
  name,
  description,
  version,
  sourceCodeUrl,
  fontColor,
  fontFace,
  svgIcon,
}: {
  position: [number, number, number];
  color: string;
  name: string;
  description: string;
  version: string;
  sourceCodeUrl: string;
  fontColor: string;
  fontFace: string;
  svgIcon?: React.ReactNode;
}) {
  const wd = 3;
  const ht = 2;
  const dp = 1;

  const showBlockFaceContent = description || version || sourceCodeUrl;

  // Compose block face content with labels for each present field
  let blockFaceContent = "";
  if (description) blockFaceContent += `Description: ${description}\n`;
  if (version) blockFaceContent += `Version: ${version}\n`;
  if (sourceCodeUrl) blockFaceContent += `Source: ${sourceCodeUrl}`;

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
        <Text
          position={[0, 0, dp / 2 + 0.01]}
          rotation={[0, 0, 0]}
          fontSize={0.10}
          color={fontColor}
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
          textAlign="center"
        >
          {blockFaceContent}
          {svgIcon && (
            <tspan
              dy={18}
              x="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {/* Render SVG icon as React node */}
              {svgIcon}
            </tspan>
          )}
        </Text>
      )}
      <RoundedBox args={[ht, wd, dp]} radius={0.08} smoothness={4}>
        <meshStandardMaterial color={color} />
      </RoundedBox>
    </group>
  );
}

export function Block({
  position,
  color,
  icon,
}: {
  position: [number, number, number];
  color: string;
  icon?: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const targetSplit = hovered ? [0.5, 0.25, 0] : [0.3, 0.15, 0]; // Further increased spacing
  // deno-lint-ignore no-explicit-any
  const yRefs = [useRef<any>(null), useRef<any>(null), useRef<any>(null)];
  const yPositions = useRef([0.8, 0.4, 0]); // Adjusted initial positions for more spacing

  useFrame(() => {
    for (let i = 0; i < 3; i++) {
      yPositions.current[i] += (targetSplit[i] - yPositions.current[i]) * 0.1;
      yPositions.current[i] = Math.max(yPositions.current[i], 0); // Ensure y >= 0
      if (yRefs[i].current) {
        yRefs[i].current.position.y = yPositions.current[i];
      }
    }
  });

  return (
    <group
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox
        ref={yRefs[2]}
        args={[1, 0.3, 1]}
        radius={0.08}
        smoothness={4}
      >
        <meshStandardMaterial color={color} />
      </RoundedBox>
      <RoundedBox
        ref={yRefs[1]}
        args={[1, 0.3, 1]}
        radius={0.08}
        smoothness={4}
      >
        <meshStandardMaterial color={color} />
      </RoundedBox>
      <RoundedBox
        ref={yRefs[0]}
        args={[1, 0.3, 1]}
        radius={0.08}
        smoothness={4}
      >
        <meshStandardMaterial color={color} />
      </RoundedBox>
    </group>
  );
}
