import dagre from "dagre";
import { NeighborhoodTheme } from "../neighborhood/theme.ts";
import { Blueprint } from "../blueprint/blueprintTypes.ts";
import {
  createLinkingOrnament,
  createLinkingOrnaments,
  FacadeBuilding,
} from "./facadeType.ts";

// deno-lint-ignore no-explicit-any
function layoutDiagramStructure(blueprints: Blueprint[]): any {
  const g = new dagre.graphlib.Graph();
  g.setGraph({});
  g.setDefaultEdgeLabel(() => ({}));

  // Add nodes to the graph
  blueprints.forEach((component: { name: string }) => {
    g.setNode(component.name, { width: 100, height: 50 });
  });

  // Add edges to the graph based on connections
  blueprints.forEach(
    (blueprint: { connections: { name: string }[]; name: string }) => {
      blueprint.connections.forEach((connection: { name: string }) => {
        g.setEdge(blueprint.name, connection.name);
      });
    },
  );

  dagre.layout(g);

  return g;
}

export function createFacades(
  blueprints: Blueprint[],
  theme: NeighborhoodTheme,
): FacadeBuilding[] {
  // Map the positions from the layout to houses
  const g = layoutDiagramStructure(blueprints);
  const facadeBuilding: FacadeBuilding[] = blueprints.map(
    (blueprint, index: number) => {
      const node = g.node(blueprint.name);
      const color = theme.getColorByIndex(index);
      return {
        name: blueprint.name,
        icon: blueprint.emojiIcon,
        description: blueprint.description,
        version: blueprint.version,

        language: createLinkingOrnament(blueprint.language),
        frameworks: createLinkingOrnaments(blueprint.frameworks),
        deployment: createLinkingOrnament(blueprint.deployment.valueOf()),
        sourceCodeUrl: createLinkingOrnament(blueprint.sourceCodeUrl),
        connections: undefined,
        links: createLinkingOrnaments(blueprint.links),
        docs: createLinkingOrnaments(blueprint.docs),
        suggestedPosition: [(node.x * index) / 50, 0, (node.y * index) / 50],
        suggestedBuildingColor: color,
      };
    },
  );

  return facadeBuilding;
}
