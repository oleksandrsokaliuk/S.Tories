import React, { useEffect } from "react";
import Routing from "./routing/Routing";
import Navigation from "./components/navigation/Navigation";
import GlobalStyle from "./styles/GlobalStyle.styled";
import backgroundVideoMp4 from "./assets/background-video.mp4";
import backgroundVideoWebm from "./assets/background-video.webm";
import {
  AppMainContainer,
  BackgroundVideo,
} from "./components/home/styles/HomePage.styles";
import { useCookies } from "react-cookie";
import NavigationTest from "./components/navigation/NavigationTest";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const currentTheme = useSelector(
    (state: RootState) => state.themeSlice.currentTheme
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppMainContainer>
          {/* <Navigation /> */}
          <NavigationTest />
          {/* <BackgroundVideo preload="auto" loop autoPlay muted>
          <source type="video/webm" src={backgroundVideoWebm} />
          <source type="video/mp4" src={backgroundVideoMp4} />
        </BackgroundVideo> */}
          <Routing />
        </AppMainContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
