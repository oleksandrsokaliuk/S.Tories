import {
  BackgroundVideo,
  FlexContainer,
  MainContainer,
} from "../styles/HomePage.styled";
import {
  LoginFormLink,
  LoginButton,
  LoginForm,
  LoginInputs,
  LoginMainContainer,
  LoginFormLinksContainer,
} from "../styles/Login.styled";
import backgroundVideoMp4 from "../assets/background-video.mp4";
import backgroundVideoWebm from "../assets/background-video.webm";

const LoginPage = () => {
  return (
    <MainContainer>
      <FlexContainer>
        <BackgroundVideo preload="auto" loop autoPlay muted>
          <source type="video/webm" src={backgroundVideoWebm} />
          <source type="video/mp4" src={backgroundVideoMp4} />
        </BackgroundVideo>
        <LoginMainContainer>
          <LoginForm>
            <LoginInputs type="email" placeholder="E-Mail" />
            <LoginInputs type="password" placeholder="Password" />
            <LoginButton>Log in</LoginButton>
            <LoginFormLinksContainer>
              <LoginFormLink to="#" className="forgot-link">
                Fogot Password
              </LoginFormLink>
              <LoginFormLink to="#" className="forgot-link">
                Create Account
              </LoginFormLink>
            </LoginFormLinksContainer>
          </LoginForm>
        </LoginMainContainer>
      </FlexContainer>
    </MainContainer>
  );
};

export default LoginPage;
