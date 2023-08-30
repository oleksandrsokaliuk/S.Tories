import React from "react";
import Routing from "./routing/Routing";
import Navigation from "./components/navigation/Navigation";
import GlobalStyle from "./styles/GlobalStyle.styled";
import backgroundVideoMp4 from "./assets/background-video.mp4";
import backgroundVideoWebm from "./assets/background-video.webm";
import {
  AppMainContainer,
  BackgroundVideo,
} from "./components/home/styles/HomePage.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppMainContainer>
        <Navigation />
        {/* <BackgroundVideo preload="auto" loop autoPlay muted>
          <source type="video/webm" src={backgroundVideoWebm} />
          <source type="video/mp4" src={backgroundVideoMp4} />
        </BackgroundVideo> */}
        <Routing />
      </AppMainContainer>
    </>
  );
}

export default App;
