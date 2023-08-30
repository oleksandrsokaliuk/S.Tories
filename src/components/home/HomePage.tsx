import {
  FlexTitle,
  FlexDescription,
  HomeContainer,
} from "./styles/HomePage.styles";

const WelcomePage = () => {
  return (
    <HomeContainer>
      <FlexTitle>S.Tories</FlexTitle>
      <FlexDescription>This is a website about dreams</FlexDescription>
      {/* <CloudImage src={Cloud} alt="cloud" /> */}
    </HomeContainer>
  );
};

export default WelcomePage;
