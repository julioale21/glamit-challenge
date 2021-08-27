import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import "@fontsource/roboto";

const theme = extendTheme({
  colors: {
    primary: "#100217E6",
    menuText: "#FAFAFA",
    textColor: "#030B1C",
  },
  fonts: {
    body: "Roboto",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
