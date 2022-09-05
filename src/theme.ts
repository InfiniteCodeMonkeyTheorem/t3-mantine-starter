import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colorScheme: "light",
  primaryColor: "orange",
  defaultRadius: 0,

  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400,
  },
  spacing: {
    xs: 2,
    sm: 6,
    md: 10,
    lg: 12,
    xl: 20,
  },
  colors: {
    dark: ["#0a1016"],
    offWhite: ["#ffffffcc"],
    darkish: ["#1a303c"],
    lessDark: ["#18372c"],
    yellow: ["#ECF50F"],
  },
};

export default theme;
