import styled, { keyframes } from "styled-components";
import { ThemeType } from "../../../redux/slices/themeSlice";

interface SampleParagraphI {
  trnslt: number;
}

export const HomeContainer = styled.section`
  flex: 1 1 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
`;

interface Mainheader {
  currentTheme: ThemeType;
}

export const MainHeader = styled.h1<Mainheader>`
  font-family: "Rock Salt";
  font-weight: 400;
  font-size: 2em;
  text-transform: capitalize;
  transform: scale(4);
  padding-top: 2%;
  z-index: 1;
  flex: 0 1 100px;
  text-align: center;
  align-self: flex-start;
  background: ${(props) =>
    props.currentTheme === ThemeType.LIGHT
      ? `linear-gradient(
      180deg,
      ${props.theme.light.mainPage.sky.bottom} 0%,
      ${props.theme.light.mainPage.sky.middle} 51%,
      ${props.theme.light.mainPage.sky.top} 100%
    )`
      : `linear-gradient(
        180deg,
        ${props.theme.dark.mainPage.sky.bottom} 0%,
        ${props.theme.dark.mainPage.sky.middle} 51%,
        ${props.theme.dark.mainPage.sky.top} 100%
      )`};
  -webkit-text-stroke: 1px black;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const ContainerTitle = styled.div`
  flex: 5 5 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlexTitle = styled.h1`
  font-family: "Rock Salt";
  font-weight: 400;
  font-size: 120px;
  text-transform: capitalize;
  color: #f8faff;
  z-index: 2;
  flex: 0 1 100px;
  text-align: center;

  @media (max-width: 850px) {
    font-size: 80px;
  }
`;

export const SunContainer = styled.div`
  cursor: pointer;
  transition: all 0.3s linear;
`;

const rotatingSun = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

export const SunSVG = styled.svg`
  width: 100%;
  height: 100%;
  &:hover {
    animation: ${rotatingSun} 5s infinite linear;
  }
`;

export const FlexDescription = styled.p`
  font-family: "Reenie Beanie", cursive;
  font-size: 40px;
  letter-spacing: 15px;
  flex: 0 1 100px;
  text-transform: uppercase;
  text-align: center;
  z-index: 10;
  color: #f8faff;
  @media (max-width: 850px) {
    font-size: 25px;
  }
`;

export const LeftCloudHeader = styled.h2`
  /* position: absolute;
  top: 30%;
  left: 35%; */
  /* z-index: 1000; */
  transform: translateY(200px);
  text-align: center;
  z-index: -1;
  font-size: 1em;
  font-family: "Rock Salt", sans-serif;
  color: white;
  opacity: 0;
  transition: all 0.3s ease-in;
`;

export const LeftCloudSVG = styled.svg``;

export const RightCloudSVG = styled.svg``;

export const RightCloudHeader = styled.h2`
  /* position: absolute;
  top: 40%;
  left: 40%; */
  transform: translateY(200px);
  z-index: -1;
  font-size: 1em;
  font-family: "Rock Salt", sans-serif;
  color: white;
  opacity: 0;
  transition: all 0.3s ease-in;
`;

export const CreatureHoverItems = styled.path`
  transition: all 0.3s ease-in-out;
`;

export const CreatureUnhoverItems = styled.path`
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

export const CreatureChair = styled.path`
  transform: translateY(330px);
  transition: transform 1s ease-in-out;
`;

export const CreatureEyeHover = styled.path`
  opacity: 0;
`;

export const CreatureEyeUnhover = styled.path`
  opacity: 1;
`;

export const RightCloudContainer = styled.div`
  flex: 0 0 40vw;
  cursor: pointer;
  transition: all 0.3s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  &:hover {
    transform: scale(1.2);
  }
  &:hover ${RightCloudHeader} {
    opacity: 1;
    transform: translateY(120px);
  }
  &:hover ${CreatureHoverItems} {
    opacity: 0;
  }
  &:hover ${CreatureUnhoverItems} {
    opacity: 1;
  }
  &:hover ${CreatureChair} {
    transform: translateY(0);
  }
  &:hover ${CreatureEyeHover} {
    opacity: 1;
  }
  &:hover ${CreatureEyeUnhover} {
    opacity: 0;
  }
`;

export const SleepingBedHover = styled.path`
  opacity: 0;
  transition: all 0.3s ease-in;
`;

export const SleepingBedHoverIdea = styled.path`
  opacity: 0;
  transition: all 0.3s ease-in;
  transition-delay: 0.2s;
`;

export const SleepingBedUnhover = styled.path`
  opacity: 1;
  transition: all 0.3s ease-in;
`;

export const LeftCloudContainer = styled.div`
  flex: 0 0 40vw;
  cursor: pointer;
  transition: all 0.3s ease-in;
  z-index: 2;
  &:hover {
    transform: scale(1.2);
  }
  &:hover ${LeftCloudHeader} {
    transform: translateY(170px);
    opacity: 1;
  }
  &:hover ${SleepingBedHover} {
    opacity: 1;
  }
  &:hover ${SleepingBedUnhover} {
    opacity: 0;
  }

  &:hover ${SleepingBedHoverIdea} {
    opacity: 1;
  }
`;

export const CloudsContainer = styled.div`
  flex: 0 0 70vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const imageLeft = keyframes`
0% {
  transform:  translateY(0) translateX(0) scale(1.5);
}
100% {
  transform: translateY(0) translateX(-50px) scale(1.5);
}
0% {
  transform: translateY(0) translateX(0) scale(1.5);
}
`;

const imageRight = keyframes`
0% {
  transform: translateX(0) scale(1.5);
}
100% {
  transform: translateX(50px) scale(1.5);
}
0% {
  transform: translateX(0) scale(1.5);
}
`;

export const CloudImageLeft = styled.img`
  position: absolute;
  bottom: 0;
  /* width: 100%; */
  height: 130%;
  object-fit: contain;
  object-position: 10% 10%;
  animation: ${imageLeft} 40s infinite;
  transform: scale(2);
`;

export const CloudImageRight = styled.img`
  position: absolute;
  bottom: 0;
  /* width: 100%; */
  height: 130%;
  object-fit: contain;
  object-position: 10% 10%;
  animation: ${imageRight} 40s infinite;
  transform: scale(2);
`;

export const BackgroundVideo = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
`;

interface AppContainerI {
  currentTheme: ThemeType;
}

export const AppMainContainer = styled.div<AppContainerI>`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow: hidden;
  background: ${(props) =>
    props.currentTheme === ThemeType.LIGHT
      ? props.theme.light.mainPage.sky.top
      : props.theme.dark.mainPage.sky.top};
  background: ${(props) =>
    props.currentTheme === ThemeType.LIGHT
      ? `linear-gradient(
      180deg,
      ${props.theme.light.mainPage.sky.bottom} 0%,
      ${props.theme.light.mainPage.sky.middle} 51%,
      ${props.theme.light.mainPage.sky.top} 100%
    )`
      : `linear-gradient(
        180deg,
        ${props.theme.dark.mainPage.sky.bottom} 0%,
        ${props.theme.dark.mainPage.sky.middle} 51%,
        ${props.theme.dark.mainPage.sky.top} 100%
      )`};
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  z-index: 10;
  margin: 0 auto;
  padding: 50px 15px;
  font-size: 18px;
  line-height: 150%;
`;

export const ContentParagraph = styled.p`
  margin: 0px 0px 20px 0px;
`;

export const SamplesMainContainer = styled.div`
  flex: 1 1 100vh;
  padding-top: 10vh;
  overflow: scroll;
  width: 100vw;
  display: flex;
  background: #e9e3e1;
`;

export const SamplesWideContainer = styled.div`
  min-width: 400vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SampleContainer = styled.div`
  flex: 1 1 20px;
  display: flex;
  &:nth-child(odd) {
    align-items: center;
  }
`;

export const SampleNestedContainer = styled.div`
  flex: 1 1 30vw;
  display: flex;
`;

export const SampleParagraph = styled.p<SampleParagraphI>`
  max-width: 40vw;
  word-wrap: normal;
  font-size: 1.6em;
  color: rgba(25, 26, 23, 0.7);
  text-align: center;
  font-family: Reenie Beanie;
  font-style: normal;
  font-weight: 500;
  line-height: 111.5%;
  transition: all 0.3s;
  margin: ${() => {
    const randomNumber = Math.floor(Math.random() * 50);
    return `0 ${randomNumber}px`;
  }};
  transform: ${({ trnslt }) =>
    trnslt > 16 ? `translateY(${trnslt}px)` : `translateY(-${trnslt}px)`};
  padding: 10px;
  &:hover {
    color: #051021;
    cursor: pointer;
    transform: ${({ trnslt }) =>
      trnslt > 16
        ? `translateY(${trnslt}px) scale(1.1)`
        : `translateY(-${trnslt}px) scale(1.1)`};
  }
`;
