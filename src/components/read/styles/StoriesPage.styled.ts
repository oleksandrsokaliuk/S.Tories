import styled from "styled-components";

export const StoriesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 90vh;
  flex: 1;
  margin: 2%;
  gap: 20px;
`;

export const StoriesContainer = styled.div`
  flex: 1 1 100px;
  display: flex;
  justify-content: space-between;
  color: white;
  max-height: 30vh;
  gap: 2%;
`;

export const StoriesMiddleContainer = styled(StoriesContainer)`
  flex: 2 2 100px;
  max-height: 50vh;
  & > *:first-child {
    transform: perspective(400px) rotateY(10deg);
  }
  & > *:last-child {
    transform: perspective(400px) rotateY(-10deg);
  }
`;

export const StoriesTopContainer = styled(StoriesContainer)`
  & > *:first-child {
    transform: perspective(400px) rotateY(10deg) rotateX(-20deg);
  }
  & > div {
    transform: perspective(400px) rotateX(-20deg);
  }
  & > *:last-child {
    transform: perspective(400px) rotateY(-10deg) rotateX(-20deg);
  }
`;

export const StoriesBottomContainer = styled(StoriesContainer)`
  & > *:first-child {
    transform: perspective(400px) rotateY(10deg) rotateX(20deg);
  }
  & > div {
    transform: perspective(400px) rotateX(20deg);
  }
  & > *:last-child {
    transform: perspective(400px) rotateY(-10deg) rotateX(20deg);
  }
`;

export const GuardianSVG = styled.svg`
  flex: 2;
`;

export const StoryDescriptionContainer = styled.div`
  flex: 1;
  max-height: 0%;
  transition: all 0.5s linear;
  text-align: center;
`;

export const StoryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* background-color: green; */
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  border-radius: 20%;
  border: 1px solid black;
  overflow: hidden;
  /* transform: perspective(1000px) rotateY(30deg); */
  &:hover {
    transform: scale(1.1);
    border-radius: 2%;
  }
  &:hover ${StoryDescriptionContainer} {
    max-height: 100%;
  }
`;

export const StoryHeader = styled.h2`
  flex: 5;
  /* width: 100%; */
  /* text-align: center; */
  padding: 5%;
`;

export const StoryHeaderLikes = styled.p`
  flex: 1;
`;

export const StoryHeaderContainer = styled.div`
  flex: 4;
  display: flex;
  justify-content: space-evenly;
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
`;
