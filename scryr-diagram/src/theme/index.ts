export type ThemeAttributes = {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    muted: string
}



export class DiagramTheme {
    private attributes: ThemeAttributes;

    constructor(attributes: ThemeAttributes) {
        this.attributes = attributes;
    }

    get primary(): string {
        return this.attributes.primary;
    }

    get secondary(): string {
        return this.attributes.secondary;
    }

    get accent(): string {
        return this.attributes.accent;
    }

    get background(): string {
        return this.attributes.background;
    }

    get surface(): string {
        return this.attributes.surface;
    }

    get muted(): string {
        return this.attributes.muted;
    }

    toCSSVariables(): Record<string, string> {
        return {
            '--primary': this.primary,
            '--secondary': this.secondary,
            '--accent': this.accent,
            '--background': this.background,
            '--surface': this.surface,
            '--muted': this.muted,
        };
    }
}

export const AutumnOfficeTheme: ThemeAttributes = {
    primary: '#54402b',
    secondary: '#fff980',
    accent: '#b0956d',
    background: '#918a7c',
    surface: '#d3bb98',
    muted: '#ffb152',
  };
  
  export const SpringOfficeTheme: ThemeAttributes = {
    primary: '#687f4d',
    secondary: '#998d6b',
    accent: '#6bfef0',
    background: '#999999',
    surface: '#90948b',
    muted: '#b4ffb8',
  };
  
  export const SummerOfficeTheme: ThemeAttributes = {
    primary: '#996d2e',
    secondary: '#997f2f',
    accent: '#6effff',
    background: '#99978a',
    surface: '#998d6b',
    muted: '#ffa1a1',
  };
  
  export const WinterOfficeTheme:ThemeAttributes = {
    primary: '#567995',
    secondary: '#889197',
    accent: '#7c8184',
    background: '#8d8f90',
    surface: '#697276',
    muted: '#a8c9da',
  };
  
  export const OceanIndustryTheme: ThemeAttributes = {
    primary: '#0179d9',
    secondary: '#02beff',
    accent: '#6bffff',
    background: '#869496',
    surface: '#00868c',
    muted: '#00f0ff',
  };
  
  export const ForestFactoryTheme: ThemeAttributes = {
    primary: '#40af46',
    secondary: '#8eff94',
    accent: '#c59a8a',
    background: '#848e78',
    surface: '#76c241',
    muted: '#e1beb1',
  };

  export let currentDiagramTheme = new DiagramTheme(AutumnOfficeTheme)