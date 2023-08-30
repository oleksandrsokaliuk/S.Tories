import { DevelopersInfoContainer } from "./styles/Footer.styles";
import DevelopersInfo from "./subcomponents/DevelopersInfo";

const WelcomePage = () => {
  return (
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
  );
};

export default WelcomePage;
