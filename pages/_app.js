import NextApp from "next/app";
import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createTheme({
  root: {
    primary: "#26a69a",
  },
  palette: {
    primary: {
      light: "#0288d1",
      main: "#F65B27",
      dark: "#0288d1",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#ffff",
      dark: "#ba000d",
      contrastText: "#000",
    },
    other: {
      light: "#ffff",
      main: "#ba000d",
    },
  },
});

import "../styles/globals.css";
export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
