import dagre from "dagre";
import { ScfComponent } from "../../scfile-loader/ScryrComponent.ts";
import { DiagramTheme } from "../../theme/index.ts";

// This enhances the scryr file component with layout and colors create a scryr diagram component
export type ScdComponent = {
  scComponent: ScfComponent;
  x: number;
  z: number;
  color: string;
};

// deno-lint-ignore no-explicit-any
function layoutDiagramStructure(components: ScfComponent[]): any {
  const g = new dagre.graphlib.Graph();
  g.setGraph({});
  g.setDefaultEdgeLabel(() => ({}));

  // Add nodes to the graph
  components.forEach((component: { name: string }) => {
    g.setNode(component.name, { width: 100, height: 50 });
  });

  // Add edges to the graph based on connections
  components.forEach(
    (component: { connections: { name: string }[]; name: string }) => {
      component.connections.forEach((connection: { name: string }) => {
        g.setEdge(component.name, connection.name);
      });
    },
  );

  dagre.layout(g);

  return g;
}

export function convertScryrToDiagramModel(
  scfComponents: ScfComponent[],
  theme: DiagramTheme,
): ScdComponent[] {
  // Map the positions from the layout to houses
  const g = layoutDiagramStructure(scfComponents);
  const scd = scfComponents.map(
    (component, index: number) => {
      const node = g.node(component.name);
      const color = theme.getColorByIndex(index);
      return {
        scComponent: component,
        x: (node.x * index) / 50,
        z: (node.y * index) / 50,
        color: color,
      };
    },
  );

  return scd;
}
