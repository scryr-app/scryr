import { menetherenBlueprints } from "../../blueprint/menetheren-blueprint.ts";
import { SimpleBlock } from "./ComponentBlock.tsx";
import { Ground } from "./Ground.tsx";
import { Blueprint } from "../../blueprint/blueprint-types.ts";
import { currentDiagramTheme } from "../../theme/theme.ts";
import { convertScryrToDiagramModel } from "./scryrDiagramModel.ts";

export function Diagram() {
  const currentTheme = currentDiagramTheme;
  const blprnts: Blueprint[] = menetherenBlueprints;

  const blueprints = convertScryrToDiagramModel(blprnts, currentTheme);

  return (
    <>
      <Ground />
      {blueprints.map((comp, index) => (
        <SimpleBlock
          key={index}
          position={[comp.x, 1, comp.z]}
          color={comp.color}
          name={comp.scComponent.name}
          description={comp.scComponent.description}
          version={comp.scComponent.version}
          sourceCodeUrl={comp.scComponent.sourceCodeUrl}
          fontColor={currentTheme.fontColor}
          fontFace={currentTheme.fontFace}
        />
      ))}
    </>
  );
}
