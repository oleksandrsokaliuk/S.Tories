import { createGlobalStyle } from "styled-components";

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
    background: linear-gradient(
    180deg,
    rgba(5, 16, 33, 1) 0%,
    rgba(14, 34, 67, 1) 30%,
    rgba(78, 117, 182, 1) 100%
  ) 
  }
`;

export default GlobalStyle;
