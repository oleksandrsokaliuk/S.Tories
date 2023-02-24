import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  min-height: 70vh;
  height: 100vh;
  width: 100vw;
  background-color: #191917;
  z-index: 1;
`;

export const FlexContainer = styled.div`
  height: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

export const FlexTitle = styled.h1`
  font-family: "Rock Salt";
  font-weight: 400;
  font-size: 120px;
  text-transform: capitalize;
  color: #191917;

  @media (max-width: 850px) {
    font-size: 80px;
  }
`;

export const FlexDescription = styled.p`
  font-family: "Reenie Beanie", cursive;
  font-size: 40px;
  letter-spacing: 15px;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 850px) {
    font-size: 25px;
  }
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(5px);
  min-width: 100%;
  min-heigth: 100%;
  z-index: -1;
`;

export const DevelopersInfoContainer = styled.div`
  position: absolute;
  bottom: 2%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
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
