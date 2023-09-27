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
    background: rgb(12,140,166);
background: radial-gradient(circle, rgba(12,140,166,1) 0%, rgba(15,183,217,1) 51%, rgba(33,80,89,1) 100%);
  }
`;

export default GlobalStyle;
