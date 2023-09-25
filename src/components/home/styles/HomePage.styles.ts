import styled, { keyframes } from "styled-components";
import Cloud from "./../../../assets/cloud.png";

interface SampleParagraphI {
  trnslt: number;
}

export const HomeContainer = styled.section`
  flex: 6 6 90vh;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: url(${Cloud});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
  /* &:hover {
    transform: translateX(-1000px);
  } */
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
  /* &:hover {
    transform: translateX(-1000px);
  } */
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

export const AppMainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
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
