import dagre from "dagre";
import {
  Android as DiAndroid,
  Apache as DiApache,
  React as DiReact,
} from "developer-icons";
import { menetherenComponents } from "../../data/menetherenComponents";
import { Block } from "./Block";
import { Connections } from "./Connections";
import { Ground } from "./Ground";

// Note: For most use cases, the best positioning/layout library for React Three Fiber is:
// @react-three/flex - Flexbox-style 3D layouts (https://github.com/pmndrs/react-three-flex)
// For physics-based or collision-aware positioning, use @react-three/rapier.
// For procedural/graph layouts, use d3-force-3d or poisson-disk-sampling.

export function Diagram() {
  // Create a new directed graph
  const g = new dagre.graphlib.Graph();
  g.setGraph({});
  g.setDefaultEdgeLabel(() => ({}));

  // Add nodes to the graph
  menetherenComponents.forEach((component, index) => {
    g.setNode(component.name, { width: 100, height: 50 });
  });

  // Add edges to the graph based on connections
  menetherenComponents.forEach((component) => {
    component.connections.forEach((connection) => {
      g.setEdge(component.name, connection.name);
    });
  });

  // Run the Dagre layout
  dagre.layout(g);
  debugger;

  // Map the positions from the layout to houses
  const houses = menetherenComponents.map((component) => {
    const node = g.node(component.name);
    return {
      pos: [node.x / 100, 0.5, node.y / 100], // Scale down positions for 3D space
      component,
    };
  });

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
        <Block
          key={i}
          position={h.pos as [number, number, number]}
          color={i % 3 === 0 ? "#b5651d" : "#e3c16f"}
          icon={iconMap[i]}
        />
      ))}
    </>
  );
}
