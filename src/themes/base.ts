import {
  // darken, lighten,
  transparentize,
} from "polished";

// import { ITheme } from "../index";

import { IButtonSizes } from "../index";
import { ITheme } from "../types/ITheme";

// interface SizeProps {
//   size?: "small" | "medium" | "large"
// }
// const space = {
//     none: 0,
//     xsmall: 4,
//     small: 8,
//     smedium: 12,
//     medium: 16,
//     large: 20,
//     xlarge: 24,
//     xxlarge: 32,
//     xxxlarge: 40
// };

// const iconSizes = {
//     xxsmall: 8,
//     xsmall: 16,
//     small: 24,
//     medium: 32,
//     large: 40,
//     xlarge: 48,
//     xxlarge: 56,
//     xxxlarge: 64
// };

// export enum fontSizes {
//   xxxsmall = 11,
//   xxsmall = 12,
//   xsmall = 14,
//   small = 16,
//   medium = 18,
//   large = 20,
//   xlarge = 24,
//   xxlarge = 28,
//   xxxlarge = 32,
//   xxxxlarge = 36,
// }

// const fontVariants = () => [
//     {
//         family: "Core Sans",
//         url: require("./static/fonts/CoreSans/CoreSans-45Regular.woff"),
//         weight: "400",
//         formats: "woff"
//     },
//     {
//         family: "Core Sans",
//         url: require("./static/fonts/CoreSans/CoreSans-65Bold.woff"),
//         weight: "700",
//         formats: "woff"
//     }
// ];

// const typography = {
//     h1: fontSizes.xxxxlarge,
//     h2: fontSizes.xxxlarge,
//     h3: fontSizes.xxlarge,
//     h4: fontSizes.xlarge,
//     h5: fontSizes.large,
//     h6: fontSizes.small,
//     largebody: fontSizes.small,
//     smallbody: fontSizes.xsmall,
//     metainfo: fontSizes.xxsmall,
//     smallcaps: fontSizes.xxsmall,
//     legal: fontSizes.xxxsmall
// };

// const lineHeights = {
//     xsmall: "16px",
//     small: "20px",
//     medium: "24px",
//     large: "32px",
//     xlarge: "36px",
//     xxlarge: "40px",
//     xxxlarge: "44px"
// };

// const weights = {
//     ultraLight: 100,
//     light: 300,
//     regular: 400,
//     semibold: 500,
//     bold: 700,
//     extraBold: 800
// };

export const colors = {
  blue: "#009fdb",
  red: "#ff3e41",
  green: "#61ad45",
  magenta: "#f8278a",
  teal: "#44fffa",
  purple: "#9583ba",
  salmon: "#fdd3d3",
  midnight: "#0a0e4d",
  wine: "#86154b",
  transparent: "transparent",
  black: "#1a1b1c",
  white: "#FFFFFF",
};

export const grays = {
  primary1: "#1A1B1C",
  primary2: "#F1F1F1",
  primary3: "#ababab",
  primary4: "#949495",
  primary5: "#BFBFBF",
  primary6: "#E9E9E9",
  primary7: "#7f7f7f",
  secondary1: "#FAFAFA",
  secondary2: "#BABBBB",
  secondary3: "#8C8D8D",
  secondary4: "#5F5F60",
};

export let semanticColors = {
  primary1: "#9583ba",
  primary2: "#55307c",
  secondary1: "#009fdb",
  secondary2: "#cce6ff",
  secondary3: "#F1F1F1",
  secondary4: "#ababab",
  secondary5: "#86154b",
  functional1: "#61ad45",
  functional2: "#ff3e41",

  ctaPrimary: colors.blue,
  ctaSecondary: transparentize(0.95, colors.purple), // hover color

  focusPrimary: transparentize(0.88, "#55307f"),

  textPrimary: "#515151", // dark grey
  textSecondary: "#ffffff", // white
  textTertiary: "rgb(219, 38, 41)", // red

  error: colors.magenta,
  success: colors.green,
  warning: grays.primary1,
  info: colors.blue,
  link: colors.blue,
  disabled: grays.primary5,
  stroke: "rgba(149, 131, 186, 0.2)",
  // focus: colors.teal

  dark: colors.black,
  darkSubcopy: transparentize(0.3, colors.black),
  darkTertiary: transparentize(0.5, colors.black),
  darkGhost: transparentize(0.7, colors.black),
  light: colors.white,
  lightSubcopy: transparentize(0.3, colors.white),
  lightTertiary: transparentize(0.5, colors.white),
  lightGhost: transparentize(0.7, colors.white),
};

export const buttonSizes: IButtonSizes = {
  small: {
    fontSize: 12,
    height: 24,
    paddingLeft: 8,
    paddingRight: 8,
  },
  medium: {
    fontSize: 14,
    height: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  large: {
    fontSize: 16,
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
  xlarge: {
    fontSize: 18,
    height: 56,
    paddingLeft: 20,
    paddingRight: 20,
  },
};

export const theme: ITheme = {
  name: "Base",
  palette: semanticColors,
  components: {
    button: {
      colors: {
        fontColor: semanticColors.secondary3,
        backgroundColor: semanticColors.secondary1,
      },
      size: buttonSizes.medium,
      fontSize: 24,
      disabled: false,
      inverse: false,
      minimal: false,
    },
  },
};
