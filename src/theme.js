import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// const styles = {
//   global: () => ({
//     body: {
//       color: mode("gray.800", "#d9d9d9"),
//       bg: mode("#2b2b2b", "#20214"),
//     },
//   }),
// };

const styles = {
  global: {
    "html, body": {
      color: mode("gray.800", "#d9d9d9"),
      bg: mode("#f6f6f6", "#202140"),
    },
  },
};

const component = {
  Drawer: {
    baseStyle: () => ({
      dialog: {
        bg: mode("#2d2d2d", "#20214"),
      },
    }),
  },
};

const breakpoints = {
  base: "368px",
  sm: "450px",
  md: "500px",
};

const theme = extendTheme({
  styles,
  component,
  config,
  fonts: {
    heading: `"Do Hyeon", sans-serif`,
    body: `"Noto Sans KR", sans-serif`,
  },
  breakpoints,
});

export default theme;
