// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    400: "blue",
  },
};

const fonts = {
  body: "Raleway, sans-serif",
};

export const theme = extendTheme({ colors, fonts });
