export type Color = string;

export type ThemeAttributes = {
  // Colors for blocks
  dawn: color; // violet
  dusk: color; // indigo
  tide: color; //  blue
  grove: color; // green
  pulse: color; // yellow
  flare: color; // orange
  ember: color; // red
  mist: color; // pink
  drift: color; // teal
  slate: color; // tan

  // Canvas basics
  backgroundColor: string;
  surfaceColor: string;
  fontFace: string;
  fontColor: string;
};

export class NeighborhoodTheme {
  private attributes: ThemeAttributes;

  constructor(attributes: ThemeAttributes) {
    this.attributes = attributes;
  }

  // Basic colors
  get dawnColor(): string {
    return this.attributes.dawn;
  }

  get duskColor(): string {
    return this.attributes.dusk;
  }

  get tideColor(): string {
    return this.attributes.tide;
  }

  get groveColor(): string {
    return this.attributes.grove;
  }

  get pulseColor(): string {
    return this.attributes.pulse;
  }

  get flareColor(): string {
    return this.attributes.flare;
  }

  get emberColor(): string {
    return this.attributes.ember;
  }

  get mistColor(): string {
    return this.attributes.mist;
  }

  get driftColor(): string {
    return this.attributes.drift;
  }

  get slateColor(): string {
    return this.attributes.slate;
  }

  getColorByIndex(index: number): string {
    switch (index % 10) {
      case 9:
        return this.dawnColor;
      case 8:
        return this.duskColor;
      case 2:
        return this.tideColor;
      case 3:
        return this.groveColor;
      case 0:
        return this.pulseColor;
      case 5:
        return this.flareColor;
      case 6:
        return this.emberColor;
      case 7:
        return this.mistColor;
      case 1:
        return this.driftColor;
      case 4:
        return this.slateColor;
      default:
        return this.dawnColor;
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
      "--alpha": this.dawnColor,
      "--beta": this.duskColor,
      "--gamma": this.tideColor,
      "--delta": this.groveColor,
      "--epsilon": this.pulseColor,
      "--zeta": this.flareColor,
      "--eta": this.emberColor,
      "--theta": this.mistColor,
      "--iota": this.driftColor,
      "--kappa": this.slateColor,

      // Canvas basics
      "--background": this.background,
      "--surface": this.surface,
      "--font-face": this.fontFace,
      "--font-color": this.fontColor,
    };
  }
}

export const AutumnOfficeTheme: ThemeAttributes = {
  // Colors for blocks, inspired by autumn leaves and cozy office tones
  dawn: "#6D4C41", // Deep brown (wood desk)
  dusk: "#8D6E63", // Muted mauve (leather chair)
  tide: "#A1887F", // Warm taupe (office walls)
  grove: "#7E886D", // Olive green (plants)
  pulse: "#FFD54F", // Golden yellow (autumn leaves)
  flare: "#FFB300", // Pumpkin orange (leaves)
  ember: "#D84315", // Brick red (leaves)
  mist: "#FF8A65", // Salmon pink (soft light)
  drift: "#80CBC4", // Muted teal (stationery)
  slate: "#FFF8E1", // Cream (paper, light)

  // Canvas basics
  backgroundColor: "#F5E9DA", // Light tan, cozy
  surfaceColor: "#FFE0B2", // Warm, soft orange
  fontFace: "Inter, system-ui, sans-serif",
  fontColor: "#FFE0B2", // Deep brown for contrast
};

export const SteelBlueTheme: ThemeAttributes = {
  // Colors for blocks, blue spectrum with some blue-adjacent orange/red for contrast
  dawn: "#1B263B", // Deep navy blue
  dusk: "#274472", // Steel blue indigo
  tide: "#41729F", // Classic steel blue
  grove: "#5A9BD5", // Blue-leaning teal
  pulse: "#6CA0DC", // Light steel blue
  flare: "#FF914D", // Muted orange, blue-adjacent
  ember: "#FF5A5F", // Coral red, blue-adjacent
  mist: "#BFD7ED", // Very pale blue
  drift: "#3EC6CF", // Blue-teal
  slate: "#F0F4FA", // Almost white blue

  // Canvas basics
  backgroundColor: "#16213E", // Deepest blue for background
  surfaceColor: "#41729F", // Steel blue for surface
  fontFace: "Inter, system-ui, sans-serif",
  fontColor: "#F0F4FA", // Very light blue for contrast
};

export const SummerGazeboTheme: ThemeAttributes = {
  // Colors for blocks, inspired by the color names but in a vibrant, summery New Orleans palette
  dawn: "#7C3AED", // Electric purple (festival lights)
  dusk: "#4338CA", // Deep indigo (evening sky)
  tide: "#2563EB", // Bright blue (clear sky)
  grove: "#22C55E", // Lush green (garden)
  pulse: "#FACC15", // Sun yellow (hot sun)
  flare: "#FB923C", // Vibrant orange (carnival)
  ember: "#EF4444", // Hot red (spicy food, music)
  mist: "#F472B6", // Pink (floral, lively)
  drift: "#2DD4BF", // Teal (cool drinks, water)
  slate: "#FCD34D", // Warm tan (sunlit stone)

  // Canvas basics
  backgroundColor: "#FFF7ED", // Hazy, sun-bleached
  surfaceColor: "#FDE68A", // Warm, glowing
  fontFace: "Inter, system-ui, sans-serif",
  fontColor: "#3B1F0A", // Deep brown for contrast
};

export const IndustryOceanTheme: ThemeAttributes = {
  // Colors for blocks, inspired by the color names but in an industry/ocean palette
  dawn: "#3D3B6D", // Deep violet, industrial twilight
  dusk: "#234E70", // Indigo, ocean depth
  tide: "#2389A4", // Ocean blue
  grove: "#3CB371", // Seaweed green
  pulse: "#F2C84B", // Sunlit yellow
  flare: "#F2994B", // Rusty orange, industrial metal
  ember: "#B0413E", // Rust red, oxidized steel
  mist: "#D17CA7", // Coral pink, sea coral
  drift: "#3CCFCF", // Teal, tropical water
  slate: "#B8B09C", // Sand tan, beach sand

  // Canvas basics
  backgroundColor: "#1B263B", // Deep ocean/industrial night
  surfaceColor: "#415A77", // Steel blue
  fontFace: "Inter, system-ui, sans-serif",
  fontColor: "#E0E1DD", // Light foam
};

export const ForestFactoryTheme: ThemeAttributes = {
  // Colors for blocks, inspired by the color names but in a forest/factory palette
  dawn: "#5B466E", // Muted violet, like forest shadows
  dusk: "#3B4A6B", // Deep indigo, industrial steel blue
  tide: "#3A6B7C", // Blue spruce
  grove: "#2E7D32", // Forest green
  pulse: "#B5A642", // Mossy yellow
  flare: "#C97E4B", // Rusty orange, factory metal
  ember: "#A63D40", // Brick red, industrial brick
  mist: "#B97A95", // Dusty pink, wildflowers
  drift: "#4B7B6C", // Teal, pine needles
  slate: "#C2B280", // Tan, tree bark

  // Canvas basics
  backgroundColor: "#23291F", // Deep forest floor
  surfaceColor: "#5A6E4F", // Mossy green
  fontFace: "Inter, system-ui, sans-serif",
  fontColor: "#F3F3E6", // Light lichen
};

export const VibrantRainbowTheme: ThemeAttributes = {
  // Colors for blocks with maximum contrast
  dawn: "#FF0000", // Pure red
  dusk: "#FF7700", // Vibrant orange
  tide: "#FFDD00", // Bright yellow
  grove: "#00CC00", // Vivid green
  pulse: "#0066FF", // Strong blue
  flare: "#3300FF", // Deep indigo
  ember: "#9900FF", // Rich violet
  mist: "#FF00AA", // Hot pink
  drift: "#00CCCC", // Teal
  slate: "#D2B48C", // Classic tan

  // Canvas basics
  backgroundColor: "#1A1A1A", // Dark gray for best contrast
  surfaceColor: "#FFFFFF", // White surface
  fontFace: "Inter, system-ui, sans-serif",
  fontColor: "#FFFFFF", // White text
};

export const currentTheme = new NeighborhoodTheme(AutumnOfficeTheme);
