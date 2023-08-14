import React from "react";
import "./App.css";
import Routing from "./routing/Routing";
import Navigation from "./components/Navigation";
import GlobalStyle from "./styles/GlobalStyle.styled";
import { BackgroundVideo } from "./styles/HomePage.styled";
import backgroundVideoMp4 from "./assets/background-video.mp4";
import backgroundVideoWebm from "./assets/background-video.webm";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <BackgroundVideo preload="auto" loop autoPlay muted>
        <source type="video/webm" src={backgroundVideoWebm} />
        <source type="video/mp4" src={backgroundVideoMp4} />
      </BackgroundVideo>
      <Routing />
    </>
  );
}

export default App;
