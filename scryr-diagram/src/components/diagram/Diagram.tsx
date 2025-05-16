import dagre from "dagre";
import {
  Android as DiAndroid,
  Apache as DiApache,
  React as DiReact,
} from "developer-icons";
import { menetherenComponents } from "../../data/menetherenComponents.ts";
import { Block, SimpleBlock } from "./Block.tsx";
import { Connections } from "./Connections.tsx";
import { Ground } from "./Ground.tsx";

// Note: For most use cases, the best positioning/layout library for React Three Fiber is:
// @react-three/flex - Flexbox-style 3D layouts (https://github.com/pmndrs/react-three-flex)
// For physics-based or collision-aware positioning, use @react-three/rapier.
// For procedural/graph layouts, use d3-force-3d or poisson-disk-sampling.

function layoutDiagramStructure(components: ScComponent[]): any {
  const g = new dagre.graphlib.Graph();
  g.setGraph({});
  g.setDefaultEdgeLabel(() => ({}));

  // Add nodes to the graph
  menetherenComponents.forEach((component: { name: string }) => {
    g.setNode(component.name, { width: 100, height: 50 });
  });

  // Add edges to the graph based on connections
  menetherenComponents.forEach(
    (component: { connections: { name: string }[]; name: string }) => {
      component.connections.forEach((connection: { name: string }) => {
        g.setEdge(component.name, connection.name);
      });
    },
  );

  dagre.layout(g);

  return g;
}

export function Diagram() {
  // Map the positions from the layout to houses
  const g = layoutDiagramStructure(menetherenComponents);

  const houses = menetherenComponents.map(
    (component: { name: string }, index: number) => {
      const node = g.node(component.name);
      return {
        pos: [(node.x * index) / 50, 0, (node.y * index) / 50] as [
          number,
          number,
          number,
        ], // Ensure pos is typed as [number, number, number]
        component,
      };
    },
  );

  const iconMap: Record<number, React.ReactNode> = {
    1: <DiReact color="#61dafb" />,
    5: <DiAndroid color="#3ddc84" />,
    9: <DiApache color="#d22128" />,
  };

  return (
    <>
      <Ground />
      <Connections houses={houses} />
      {houses.map((h: { pos: [number, number, number] }, i: number) => (
        <SimpleBlock
          key={i}
          position={h.pos as [number, number, number]}
          color={i % 3 === 0 ? "#b5651d" : "#e3c16f"}
          name={"React"}
        />
      ))}
    </>
  );
}
