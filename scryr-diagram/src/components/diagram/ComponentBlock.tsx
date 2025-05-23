import { RoundedBox, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

// Elastic ease-in function
function easeInElastic(t: number): number {
  if (t === 0) return 0;
  if (t === 1) return 1;
  const c4 = (2 * Math.PI) / 3;
  return -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
}

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
}) {
  const wd = 3;
  const ht = 2;
  const dp = 1;

  const [hovered, setHovered] = useState(false);
  const split = useRef(0);

  // Animate block rising up with ease-in-elastic over 2 seconds
  const animationStart = useRef<number | null>(null);
  const [rise, setRise] = useState(0);

  useEffect(() => {
    animationStart.current = performance.now();
    setRise(0);
  }, [hovered]); // run once on mount

  // Animate layers moving up for 10 seconds
  const [layerAnimTime, setLayerAnimTime] = useState(0);
  const animStart = useRef<number | null>(null);

  useEffect(() => {
    animStart.current = performance.now();
    setLayerAnimTime(0);
  }, []);

  useFrame(() => {
    // Animate rise for 2 seconds
    if (animationStart.current !== null && rise < 1) {
      const elapsed = (performance.now() - animationStart.current) / 2000;
      const t = Math.min(elapsed, 1);
      setRise(easeInElastic(t));
    }
    // Animate layers moving up for 10 seconds
    if (animStart.current !== null && layerAnimTime < 10) {
      const elapsed = (performance.now() - animStart.current) / 1000;
      setLayerAnimTime(Math.min(elapsed, 10));
    }
    // ...existing split animation...
    const target = hovered ? 1 : 0;
    split.current = split.current + (target - split.current) * 0.12;
    if (Math.abs(target - split.current) < 0.001) {
      split.current = target;
    }
  });

  const layerCount = 3;
  const layerHeight = wd / layerCount;
  const layerGap = 0.15;

  let blockFaceContent = "";
  if (description) blockFaceContent += `Description: ${description}\n`;
  if (version) blockFaceContent += `Version: ${version}\n`;
  if (sourceCodeUrl) blockFaceContent += `Source: ${sourceCodeUrl}`;

  const showBlockFaceContent = description || version || sourceCodeUrl;

  const isSplitting = split.current > 0.01;

  // Animate the group up from y=position[1] to y=position[1]+1 (or adjust as needed)
  const animatedY = position[1] + rise;

  return (
    <group
      position={[position[0], animatedY, position[2]]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
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
        </Text>
      )}
      {/* Only split into layers after mouse is over, otherwise show single box */}
      {!isSplitting
        ? (
          <RoundedBox args={[ht, wd, dp]} radius={0.08} smoothness={4}>
            <meshStandardMaterial color={color} />
          </RoundedBox>
        )
        : (
          [0, 1, 2].map((i) => {
            // Animate each layer up over 10 seconds
            const upOffset = layerAnimTime < 10 ? layerAnimTime : 10;
            const baseY = (i - 1) * layerHeight;
            const splitY = (i - 1) * (layerHeight + layerGap);
            const y = (baseY * (1 - split.current) + splitY * split.current) +
              upOffset * 0.15; // 0.15 units per second
            return (
              <RoundedBox
                key={i}
                args={[ht, layerHeight, dp]}
                radius={0.08}
                smoothness={4}
                position={[0, y, 0]}
              >
                <meshStandardMaterial color={color} />
              </RoundedBox>
            );
          })
        )}
    </group>
  );
}
