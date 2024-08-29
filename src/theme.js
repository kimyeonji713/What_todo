import { extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

const config = {
  initialColorMode: "light",
  useSystemColoyMode: false,
};

const styles = {
  global: () => ({
    body: {
      color: module("gray.800", "white"),
      bg: module("#fff", "#000"),
    },
  }),
};

const component = {
  Drawer: {
    baseStyle: () => ({
      dialog: {
        bg: module("#fff", "#000"),
      },
    }),
  },
};

const theme = extendTheme({
  styles,
  component,
  config,
});
