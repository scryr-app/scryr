export type Color = string;

export enum ThemeColorName {
  Dawn = "dawn",
  Dusk = "dusk",
  Tide = "tide",
  Grove = "grove",
  Pulse = "pulse",
  Flare = "flare",
  Ember = "ember",
  Mist = "mist",
  Drift = "drift",
  Slate = "slate",
}

export type ThemeAttributes = Record<ThemeColorName, string> & {
  backgroundColor: string;
  surfaceColor: string;
  fontFace: string;
  fontColor: string;
};

export type Url = string;
export type Png = string; // URL or path to a PNG image
export type Markdown = string;

export type Version = string;
export type LinkingOrnament = {
  name: string;
  icon?: Png;
  link?: Url;
};

// Add a layer here.
// export type Floor = {
//     rightOrnament: ReactNode;
//     centerOrnament: ReactNode;
//     leftOrnament: ReactNode;
// };

export type FacadeBuilding = {
  name: string;
  icon?: string;
  description: string;

  version?: Version;
  language?: LinkingOrnament;
  frameworks?: LinkingOrnament[];
  deployment?: LinkingOrnament;
  sourceCodeUrl?: LinkingOrnament;
  connections?: FacadeBuilding[];
  links?: LinkingOrnament[];
  docs?: LinkingOrnament[];

  // Initial Display Suggestions
  suggestedPosition: [number, number, number];
  suggestedBuildingColor: Color;
};

export function createLinkingOrnaments(names: string[]): LinkingOrnament[] {
  return names.map((name) => createLinkingOrnament(name));
}

export function createLinkingOrnament(name: string): LinkingOrnament {
  return { name: name };
}
