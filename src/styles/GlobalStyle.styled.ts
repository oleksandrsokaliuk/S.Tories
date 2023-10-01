import { createGlobalStyle } from "styled-components";
// import { store } from "../redux/store";
// import { ThemeType } from "../redux/slices/themeSlice";

// let currentTheme = "";

// const subscribe = store.subscribe(() => {
//   let currentTheme = store.getState().themeSlice.currentTheme;
//   console.log("Состояние изменилось и равно:", currentTheme);
// });
// subscribe();

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
  }

  body {
  }
`;

export default GlobalStyle;
