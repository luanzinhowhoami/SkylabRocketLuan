import React from "react";

import {
  ColorModeProvider,
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
} from "@chakra-ui/core";

import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "../../styles/theme";

const themeContainer: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider value="dark">
        <EmotionThemeProvider theme={{ theme }}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
};

export default themeContainer;
