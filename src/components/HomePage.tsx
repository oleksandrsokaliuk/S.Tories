import backgroundVideoMp4 from "../assets/background-video.mp4";
import backgroundVideoWebm from "../assets/background-video.webm";
import DevelopersInfo from "./DevelopersInfo";
import {
  MainContainer,
  FlexContainer,
  FlexTitle,
  FlexDescription,
  BackgroundVideo,
  DevelopersInfoContainer,
  ContentContainer,
  ContentParagraph,
} from "../styles/HomePage.styled";

const WelcomePage = () => {
  return (
    <>
      <MainContainer>
        <FlexContainer>
          <BackgroundVideo preload="auto" loop autoPlay muted>
            <source type="video/webm" src={backgroundVideoWebm} />
            <source type="video/mp4" src={backgroundVideoMp4} />
          </BackgroundVideo>
          <FlexTitle>S.Tories</FlexTitle>
          <FlexDescription>This is a website about dreams</FlexDescription>
          <DevelopersInfoContainer>
            <DevelopersInfo
              name="Viktoriia Sokaliuk"
              proffession="UI/UX Designer"
              linkedin="https://www.linkedin.com/in/viktoriiahalushko/"
              instagram="https://www.instagram.com/torii.so/"
              behance="#"
            />
            <DevelopersInfo
              name="Oleksandr Sokaliuk"
              proffession="Frontend-End Developer"
              linkedin="https://www.linkedin.com/in/oleksandr-sokaliuk-b7b9b0244/"
              github="https://github.com/oleksandrsokaliuk"
            />
          </DevelopersInfoContainer>
        </FlexContainer>
      </MainContainer>
      <ContentContainer>
        <ContentParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi placeat
          eveniet error deleniti! Quidem perspiciatis illo, expedita veniam nam
          magni minus inventore nobis doloribus, voluptatibus dolores. Hic dolor
          alias unde.
        </ContentParagraph>
        <ContentParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi placeat
          eveniet error deleniti! Quidem perspiciatis illo, expedita veniam nam
          magni minus inventore nobis doloribus, voluptatibus dolores. Hic dolor
          alias unde.
        </ContentParagraph>
        <ContentParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi placeat
          eveniet error deleniti! Quidem perspiciatis illo, expedita veniam nam
          magni minus inventore nobis doloribus, voluptatibus dolores. Hic dolor
          alias unde.
        </ContentParagraph>
      </ContentContainer>
    </>
  );
};

export default WelcomePage;
