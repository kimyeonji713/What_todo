import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColoyMode: false,
};

const styles = {
  global: () => ({
    body: {
      color: mode("gray.600", "white"),
      bg: mode("#f6f6f6", "#000"),
    },
  }),
};

const component = {
  Drawer: {
    baseStyle: () => ({
      dialog: {
        bg: mode("#fff", "#000"),
      },
    }),
  },
};

const theme = extendTheme({
  styles,
  component,
  config,
  fonts: {
    heading: `"Noto Sans KR", sans-serif`,
    body: `"Noto Sans KR", sans-serif`,
  },
});

export default theme;
