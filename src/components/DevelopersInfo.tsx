import linkedidinIcon from "../assets/linkedinIcon.svg";
import instaIcon from "../assets/instaIcon.svg";
import githubIcon from "../assets/github-icon.svg";
import behanceIcon from "../assets/behanceIcon.svg";
import {
  DevInfoContainer,
  DevInfoName,
  DevInfoRole,
  DevContainerLinks,
  SocialNetworkImage,
} from "../styles/DevelopersInfo.styled";

interface DevelopersInfoProps {
  name: string;
  proffession: string;
  linkedin: string;
  instagram?: string;
  github?: string;
  behance?: string;
}

const DevelopersInfo: React.FC<DevelopersInfoProps> = ({
  name,
  proffession,
  linkedin,
  instagram,
  github,
  behance,
}) => {
  return (
    <div>
      <DevInfoContainer>
        <DevInfoName>{name}</DevInfoName>
        <DevInfoRole>{proffession}</DevInfoRole>
      </DevInfoContainer>
      <DevContainerLinks
        style={
          name !== "Viktoriia Sokaliuk" ? { width: "40%" } : { width: "70%" }
        }
      >
        <a href={linkedin} target="_blank">
          <SocialNetworkImage src={linkedidinIcon} />
        </a>
        {name === "Viktoriia Sokaliuk" ? (
          <a href={instagram} target="_blank">
            <SocialNetworkImage src={instaIcon} />
          </a>
        ) : (
          <a href={github} target="_blank">
            <SocialNetworkImage src={githubIcon} />
          </a>
        )}
        {name === "Viktoriia Sokaliuk" && (
          <a href={behance} target="_blank">
            <SocialNetworkImage src={behanceIcon} />
          </a>
        )}
      </DevContainerLinks>
    </div>
  );
};

export default DevelopersInfo;
