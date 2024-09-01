import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
