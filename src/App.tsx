import React from "react";
import "./App.css";
import Routing from "./routing/Routing";
import Navigation from "./components/Navigation";
import GlobalStyle from "./styles/GlobalStyle.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routing />
    </>
  );
}

export default App;
