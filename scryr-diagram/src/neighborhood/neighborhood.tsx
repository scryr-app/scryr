import { menetherenBlueprints } from "../blueprint/menetherenBlueprint.ts";
import { Building } from "./Building.tsx";
import { Blueprint } from "../blueprint/blueprintTypes.ts";
import { currentTheme } from "./theme.ts";
import { createFacades } from "../facade/createFacades.ts";
import { Ground } from "./Ground.tsx";
import { createLinkingOrnament } from "../facade/facadeType.ts";

export function Neighborhood() {
  const blprnts: Blueprint[] = menetherenBlueprints;

  // const Neighbors = createFacades(blprnts, currentTheme);

  return (
    <>
      <axesHelper args={[15]} />
      <gridHelper args={[50, 50]} />
      <Ground />
      <Building
        key={0}
        position={[0, 0, 0]}
        color={currentTheme.fontColor}
        name={"Img Recog Pipeline"}
        icon={"🍃"}
        description={"Data Job runners for the AI image recognition pipeline."}
        version={"v2.0.1"}
        sourceCodeUrl={{ name: "Airflow", link: "https://github.com/apache/airflow", icon: "/icons/kafka.svg"}}
        language={ { name: "Python", link: "https://www.python.org", icon: "/icons/python.svg" } }
        // frameworks={[{name: "Django", link: "https://www.djangoproject.com", icon: "/icons/django.svg"}]}
        frameworks={["Django", "Pydantic"]}  
        links={[{name: "LLM", link: "https://www.llama.com/"}]}
        docs={[{name: "llama docs", link: "https://www.llama.com/docs/get-started/"}, {name: "aws emr docs", link: "https://docs.aws.amazon.com/emr/"}]}
        fontFace={currentTheme.fontFace}
        fontColor={currentTheme.fontColor}
      />

      {/* {Neighbors.map((neighbor, index) => (
        <Building
          key={index}
          position={[
            neighbor.suggestedPosition[0],
            1,
            neighbor.suggestedPosition[2],
          ]}
          color={neighbor.suggestedBuildingColor}
          name={neighbor.name}
          icon={neighbor.icon}
          description={neighbor.description}
          version={neighbor.version || ""}
          sourceCodeUrl={neighbor.sourceCodeUrl}
          language={neighbor.language}
          frameworks={neighbor.frameworks?.map(f => f.name)}
          links={neighbor.links}
          docs={neighbor.docs}
          fontColor={currentTheme.fontColor}
          fontFace={currentTheme.fontFace}
        />
      ))} */}
    </>
  );
}
