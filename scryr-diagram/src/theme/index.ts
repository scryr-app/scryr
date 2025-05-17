import { interleaveAttributes } from "three-stdlib";

export type ThemeAttributes = {
    // Colors for blocks
    alphaColor: string;
    betaColor: string;
    gammaColor: string;
    deltaColor: string;
    epsilonColor: string;
    zetaColor: string;
    etaColor: string;
    thetaColor: string;
    iotaColor: string;
    kappaColor: string;

    // Canvas basics
    backgroundColor: string;
    surfaceColor: string;
    fontFace: string;
    fontColor: string;
};

export class DiagramTheme {
    private attributes: ThemeAttributes;

    constructor(attributes: ThemeAttributes) {
        this.attributes = attributes;
    }

    // Basic colors
    get alphaColor(): string {
        return this.attributes.alphaColor;
    }

    get betaColor(): string {
        return this.attributes.betaColor;
    }

    get gammaColor(): string {
        return this.attributes.gammaColor;
    }

    get deltaColor(): string {
        return this.attributes.deltaColor;
    }

    get epsilonColor(): string {
        return this.attributes.epsilonColor;
    }

    get zetaColor(): string {
        return this.attributes.zetaColor;
    }

    get etaColor(): string {
        return this.attributes.etaColor;
    }

    get thetaColor(): string {
        return this.attributes.thetaColor;
    }

    get iotaColor(): string {
        return this.attributes.iotaColor;
    }

    get kappaColor(): string {
        return this.attributes.kappaColor;
    }

    getColorByIndex(index: number): string {
        switch (index % 10) {
            case 0:
                return this.alphaColor;
            case 1:
                return this.betaColor;
            case 2:
                return this.gammaColor;
            case 3:
                return this.deltaColor;
            case 4:
                return this.epsilonColor;
            case 5:
                return this.zetaColor;
            case 6:
                return this.etaColor;
            case 7:
                return this.thetaColor;
            case 8:
                return this.iotaColor;
            case 9:
                return this.kappaColor;
            default:
                return this.alphaColor;
        }
    }

    // Canvas basics
    get background(): string {
        return this.attributes.backgroundColor;
    }

    get surface(): string {
        return this.attributes.surfaceColor;
    }

    get fontFace(): string {
        return this.attributes.fontFace;
    }

    get fontColor(): string {
        return this.attributes.fontColor;
    }

    toCSSVariables(): Record<string, string> {
        return {
            // Basic colors
            "--alpha": this.alphaColor,
            "--beta": this.betaColor,
            "--gamma": this.gammaColor,
            "--delta": this.deltaColor,
            "--epsilon": this.epsilonColor,
            "--zeta": this.zetaColor,
            "--eta": this.etaColor,
            "--theta": this.thetaColor,
            "--iota": this.iotaColor,
            "--kappa": this.kappaColor,

            // Canvas basics
            "--background": this.background,
            "--surface": this.surface,
            "--font-face": this.fontFace,
            "--font-color": this.fontColor,
        };
    }
}

export const AutumnOfficeTheme: ThemeAttributes = {
    // Colors for blocks
    alphaColor: "#54402b",
    betaColor: "#fff980",
    gammaColor: "#b0956d",
    deltaColor: "#c4a785",
    epsilonColor: "#d8b89d",
    zetaColor: "#ecc9b5",
    etaColor: "#ffdacd",
    thetaColor: "#ffe6dc",
    iotaColor: "#fff2eb",
    kappaColor: "#fff9f6",

    // Canvas basics
    backgroundColor: "#918a7c",
    surfaceColor: "#d3bb98",
    fontFace: "Inter, system-ui, sans-serif",
    fontColor: "#2c2c2c",
};

export const SpringOfficeTheme: ThemeAttributes = {
    // Colors for blocks
    alphaColor: "#687f4d",
    betaColor: "#998d6b",
    gammaColor: "#8aa970",
    deltaColor: "#9cb982",
    epsilonColor: "#aec994",
    zetaColor: "#c0d9a6",
    etaColor: "#d2e9b8",
    thetaColor: "#e4f9ca",
    iotaColor: "#f6ffdc",
    kappaColor: "#fafff0",

    // Canvas basics
    backgroundColor: "#999999",
    surfaceColor: "#90948b",
    fontFace: "Inter, system-ui, sans-serif",
    fontColor: "#2c2c2c",
};

export const SummerOfficeTheme: ThemeAttributes = {
    // Colors for blocks
    alphaColor: "#996d2e",
    betaColor: "#997f2f",
    gammaColor: "#b18e47",
    deltaColor: "#c99d5f",
    epsilonColor: "#e1ac77",
    zetaColor: "#f9bb8f",
    etaColor: "#ffcaa7",
    thetaColor: "#ffd9bf",
    iotaColor: "#ffe8d7",
    kappaColor: "#fff7ef",

    // Canvas basics
    backgroundColor: "#99978a",
    surfaceColor: "#998d6b",
    fontFace: "Inter, system-ui, sans-serif",
    fontColor: "#2c2c2c",
};

export const WinterOfficeTheme: ThemeAttributes = {
    // Colors for blocks
    alphaColor: "#567995",
    betaColor: "#889197",
    gammaColor: "#7a9bab",
    deltaColor: "#8cabbb",
    epsilonColor: "#9ebbc9",
    zetaColor: "#b0cbd7",
    etaColor: "#c2dbe5",
    thetaColor: "#d4ebf3",
    iotaColor: "#e6fbff",
    kappaColor: "#f8ffff",

    // Canvas basics
    backgroundColor: "#8d8f90",
    surfaceColor: "#697276",
    fontFace: "Inter, system-ui, sans-serif",
    fontColor: "#2c2c2c",
};

export const OceanIndustryTheme: ThemeAttributes = {
    // Colors for blocks
    alphaColor: "#0179d9",
    betaColor: "#02beff",
    gammaColor: "#1ac6ff",
    deltaColor: "#32ceff",
    epsilonColor: "#4ad6ff",
    zetaColor: "#62deff",
    etaColor: "#7ae6ff",
    thetaColor: "#92eeff",
    iotaColor: "#aaf6ff",
    kappaColor: "#c2feff",

    // Canvas basics
    backgroundColor: "#869496",
    surfaceColor: "#00868c",
    fontFace: "Inter, system-ui, sans-serif",
    fontColor: "#ffffff",
};

export const ForestFactoryTheme: ThemeAttributes = {
    // Colors for blocks
    alphaColor: "#40af46",
    betaColor: "#8eff94",
    gammaColor: "#52bf58",
    deltaColor: "#64cf6a",
    epsilonColor: "#76df7c",
    zetaColor: "#88ef8e",
    etaColor: "#9affa0",
    thetaColor: "#acffb2",
    iotaColor: "#bfffc4",
    kappaColor: "#d1ffd6",

    // Canvas basics
    backgroundColor: "#848e78",
    surfaceColor: "#76c241",
    fontFace: "Inter, system-ui, sans-serif",
    fontColor: "#2c2c2c",
};

export let currentDiagramTheme = new DiagramTheme(ForestFactoryTheme);
