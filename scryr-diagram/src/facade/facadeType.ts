import { Color } from "../neighborhood";
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
