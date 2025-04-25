import { RoundedBox, Html } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Flex, Box as FlexBox } from "@react-three/flex";

export function House({
  position,
  color = "#b5651d",
  icon,
}: {
  position: [number, number, number];
  color?: string;
  icon?: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const targetSplit = hovered ? [0.7, 0, -0.7] : [0.3, 0, -0.3];
  const yRefs = [useRef<any>(), useRef<any>(), useRef<any>()];
  const yPositions = useRef([0.3, 0, -0.3]);

  useFrame(() => {
    for (let i = 0; i < 3; i++) {
      yPositions.current[i] += (targetSplit[i] - yPositions.current[i]) * 0.1;
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
        {/* Place icon on the floor, centered, slightly above to avoid z-fighting */}
        {icon && (
          <Html
            position={[0, 0.151, 0]} // 0.15 is half the height of the floor, +0.001 offset
            transform
            occlude
            style={{
              width: "2.5em",
              height: "2.5em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "2.5em",
                height: "2.5em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </div>
          </Html>
        )}
      </RoundedBox>
      <RoundedBox
        ref={yRefs[1]}
        args={[1, 0.3, 1]}
        radius={0.08}
        smoothness={4}
      >
        <meshStandardMaterial color="#fff2cc" />
      </RoundedBox>
      <RoundedBox
        ref={yRefs[0]}
        args={[1, 0.3, 1]}
        radius={0.08}
        smoothness={4}
      >
        <meshStandardMaterial color="#b0c4de" />
      </RoundedBox>
    </group>
  );
}
