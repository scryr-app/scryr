import { Line } from "@react-three/drei";
import * as THREE from "three";

export function CurvedConnection({
  start,
  end,
  color,
  offset = 0,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
  offset?: number;
}) {
  const mid = [
    (start[0] + end[0]) / 2,
    (start[2] + end[2]) / 2,
    0, // Ensure the curve lies on the ground
  ];
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(...start),
    new THREE.Vector3(mid[0], 0.5 + offset, mid[2]), // Add vertical curvature in the middle
    new THREE.Vector3(...end),
  );
  const points = curve.getPoints(32);

  return <Line points={points} color={color} lineWidth={2} dashed={false} />;
}
