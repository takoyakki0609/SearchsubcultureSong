import React from "react";
import GlobalStyle from "./styles/globalStyle";
import Router from "./shared/Router";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <Router />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
