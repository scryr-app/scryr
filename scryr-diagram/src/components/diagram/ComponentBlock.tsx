import { Html, RoundedBox, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useRef, useState } from "react";

export function SimpleBlock({
  position,
  color,
  name,
  fontColor,
  fontFace,
}: {
  position: [number, number, number];
  color: string;
  name: string;
  fontColor: string;
  fontFace: string;
}) {
  const wd = 3;
  const ht = 2;
  const dp = 1;
  return (
    <group position={position}>
      <Text
        position={[.3, 0, .51]}
        fontSize={0.2}
        color={fontColor}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
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
