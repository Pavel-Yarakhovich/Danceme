import styled, { css, createGlobalStyle } from "styled-components";
import { themes } from "../config/themes";

export const App = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-flow: column;
  position: relative;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }
  
  body {
    background-color: ${themes.regular.white};
    margin: 0;
    font-family: 'Alegreya Sans SC', sans-serif;
  }

  a:hover {
    opacity: .7;
  }
  
  a:hover,
  a:visited,
  a:focus {
      text-decoration: none;
  }

  @media (min-width: 1200px) {
    html {
      font-size: 16px;
    }
  }
`;
