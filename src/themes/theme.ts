// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    900: "#030334",
    800: "#F0F0FE",
    400: "#5353C6",
  },
  secondary: {
    400: "#5F5F5F",
    500: "#8D9199",
  },
};

const fonts = {
  body: "Raleway, sans-serif",
};

export const theme = extendTheme({ colors, fonts });
