import styled from "styled-components";
import Cloud from "./../../../assets/cloud.png";

export const HomeContainer = styled.section`
  flex: 6 6 200px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: url(${Cloud});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

// export const CloudImage = styled.img`
//   position: absolute;
//   bottom: 0;
//   /* width: 100%; */
//   height: 130%;
//   opacity: 0.5;
//   /* object-fit: contain;
//   object-position: 10% 10%; */
// `;

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
