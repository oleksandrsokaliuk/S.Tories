import { createGlobalStyle } from "styled-components";
import { store } from "../redux/store"; // Импортируйте свой Redux Store

// let currentTheme = "";

const subscribe = store.subscribe(() => {
  const currentState = store.getState(); // Получаете текущее состояние
  console.log("Состояние изменилось и равно:", currentState);
});
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
    background: rgb(173,216,230);
background: linear-gradient(180deg, rgba(173,216,230,0.6) 0%, rgba(0,191,255,1) 51%, rgba(173,216,230,1) 100%);
  }
`;

export default GlobalStyle;
