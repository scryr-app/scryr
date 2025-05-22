import { menetherenComponents } from "../../data/menetherenComponents.ts";
import { SimpleBlock } from "./ComponentBlock.tsx";
import { Ground } from "./Ground.tsx";
import { ScfComponent } from "../../scfile-loader/ScryrComponent.ts";
import { currentDiagramTheme } from "../../theme/index.ts";
import { convertScryrToDiagramModel } from "./scryrDiagramModel.ts";

// Note: For most use cases, the best positioning/layout library for React Three Fiber is:
// @react-three/flex - Flexbox-style 3D layouts (https://github.com/pmndrs/react-three-flex)
// For physics-based or collision-aware positioning, use @react-three/rapier.
// For procedural/graph layouts, use d3-force-3d or poisson-disk-sampling.

export function Diagram() {
  const currentTheme = currentDiagramTheme;
  const components: ScfComponent[] = menetherenComponents;

  const scdComponents = convertScryrToDiagramModel(components, currentTheme);

  return (
    <>
      <Ground />
      {scdComponents.map((comp, index) => (
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
