import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#FFFFFF",

      gray025: "#FCFCFD",
      gray050: "#F9FAFB",
      gray100: "#F2F4F7",
      gray200: "#EAECF0",
      gray300: "#D0D5DD",
      gray400: "#98A2B3",
      gray500: "#667085",
      gray600: "#475467",
      gray700: "#344054",
      gray800: "#1D2939",
      gray900: "#101828",

      green100: "#F0FDF4",
      green200: "#DCFCE7",
      green300: "#BBF7D0",
      green400: "#86EFAC",
      green500: "#4ADE80",
      green600: "#12B76A",

      red200: "#FECDCA",
      red500: "#F04438",

      orange200: "#FFE8A9",
      orange500: "#F79009",

      greenwater200: "#A6F4C5",
      greenwater500: "#12B76A",
    },

    fonts: {
      inter: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    },

    fontSizes: {
      heading1: "56px",
      heading2: "48px",
      heading3: "40px",
      heading4: "32px",
      heading5: "24px",
      heading6: "20px",

      lg: "20px",
      md: "18px",
      nm: "16px",
      sm: "14px",
    },

    lineHeights: {
      heading1: "61.6px",
      heading2: "52.8px",
      heading3: "44px",
      heading4: "35.2px",
      heading5: "26.4px",
      heading6: "22px",

      lg: "28px",
      md: "25.2px",
      nm: "22.4px",
      sm: "19.6px",
    },

    fontWeights: {
      light: "300",
      regular: "400",
      medium: "500",
      bold: "700",
      black: "900",
    },

    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      8: "32px",
      10: "40px",
    },

    radii: {
      sm: "6px",
      md: "8px",
      lg: "12px",
      xl: "16px",
      full: "9999px",
    },

    blur: {
      lightLight: "rgba(255,255,255,0.60)",
      lightDark: "rgba(16,24,40,0.45)",
      mediumLight: "rgba(255,255,255,0.70)",
      mediumDark: "rgba(16,24,40,0.75)",
    },
  },
});
