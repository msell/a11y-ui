import {
  // darken, lighten,
  transparentize,
} from "polished";

import { fontSize, ITheme } from "../index";
import { grays, colors, buttonSizes } from "./base";

export const semanticColors = {
  primary1: "#9583ba",
  primary2: "#55307c",
  secondary1: "#222",
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
  dark: colors.black,
  darkSubcopy: transparentize(0.3, colors.black),
  darkTertiary: transparentize(0.5, colors.black),
  darkGhost: transparentize(0.7, colors.black),
  light: colors.white,
  lightSubcopy: transparentize(0.3, colors.white),
  lightTertiary: transparentize(0.5, colors.white),
  lightGhost: transparentize(0.7, colors.white),
};

export const theme: ITheme = {
  name: "Black",
  palette: semanticColors,
  components: {
    button: {
      colors: {
        fontColor: "#fff", // we could/should use the semantic colors
        backgroundColor: "#222", // but this is showing how we could do one off on specific component
      },
      size: buttonSizes.medium,
      fontSize: fontSize.xlarge,
      disabled: false,
      inverse: false,
      minimal: false,
    },
  },
};
