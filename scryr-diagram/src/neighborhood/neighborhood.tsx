import { menetherenBlueprints } from "../blueprint/menetherenBlueprint.ts";
import { Building } from "./Building.tsx";
import { Ground } from "./ground.tsx";
import { Blueprint } from "../blueprint/blueprintTypes.ts";
import { currentTheme } from "./theme.ts";
import { createNeighborhood } from "./createNeighborhood.ts";

export function Neighborhood() {
  const blprnts: Blueprint[] = menetherenBlueprints;

  const blueprints = createNeighborhood(blprnts, currentTheme);

  return (
    <>
      <Ground />
      {blueprints.map((comp, index) => (
        <Building
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
