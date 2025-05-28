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

export type FacadeBuilding = {
    name: string;
    emojiIcon: string;
    description: string;
    version: Version;
    language: LinkingOrnament;
    frameworks: LinkingOrnament[];
    deployment: LinkingOrnament[];
    sourceCodeUrl: LinkingOrnament;
    connections: FacadeBuilding[];
    links: LinkingOrnament[];
    docs: string[];

    // Display
    position: [number, number, number];
    buildingColor: Color;
};
