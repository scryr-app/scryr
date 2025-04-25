import { House } from "./House";
import { Connections } from "./Connections";
import { Ground } from "./Ground";
import {
  React as DiReact,
  Android as DiAndroid,
  Apache as DiApache,
} from "developer-icons";

// Note: For most use cases, the best positioning/layout library for React Three Fiber is:
// @react-three/flex - Flexbox-style 3D layouts (https://github.com/pmndrs/react-three-flex)
// For physics-based or collision-aware positioning, use @react-three/rapier.
// For procedural/graph layouts, use d3-force-3d or poisson-disk-sampling.

export function Town() {
  const houses = [
    { pos: [-4, 0.5, -4] },
    { pos: [-2, 0.5, -4] },
    { pos: [0, 0.5, -4] },
    { pos: [2, 0.5, -4] },
    { pos: [-4, 0.5, -2] },
    { pos: [2, 0.5, -2] },
    { pos: [-4, 0.5, 0] },
    { pos: [0, 0.5, 0] },
    { pos: [4, 0.5, 0] },
    { pos: [-2, 0.5, 2] },
    { pos: [2, 0.5, 2] },
    { pos: [0, 0.5, 4] },
    { pos: [4, 0.5, 4] },
  ];

  const iconMap: Record<number, React.ReactNode> = {
    1: <DiReact color="#61dafb" />,
    5: <DiAndroid color="#3ddc84" />,
    9: <DiApache color="#d22128" />,
  };

  return (
    <>
      <Ground />
      <Connections houses={houses} />
      {houses.map((h, i) => (
        <House
          key={i}
          position={h.pos as [number, number, number]}
          color={i % 3 === 0 ? "#b5651d" : "#e3c16f"}
          icon={iconMap[i]}
        />
      ))}
    </>
  );
}
