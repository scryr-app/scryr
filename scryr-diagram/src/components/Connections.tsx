import { CurvedConnection } from "./CurvedConnection";

export function Connections({
  houses,
}: {
  houses: { pos: [number, number, number] }[];
}) {
  const types = [
    { color: "#0074D9", offset: 0.03 }, // sewer
    { color: "#7FDBFF", offset: 0.06 }, // water
    { color: "#FFDC00", offset: 0.09 }, // electrical
  ];

  const lines = [];
  for (let i = 0; i < houses.length - 1; i++) {
    for (let t = 0; t < types.length; t++) {
      lines.push(
        <CurvedConnection
          key={`${i}-${t}`}
          start={houses[i].pos}
          end={houses[i + 1].pos}
          color={types[t].color}
          offset={types[t].offset}
        />,
      );
    }
  }
  return <>{lines}</>;
}
