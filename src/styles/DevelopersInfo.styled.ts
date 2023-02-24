import styled from "styled-components";

export const DevInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const DevInfoName = styled.h2`
  font-family: "Gruppo", cursive;
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 850px) {
    font-size: 1.5rem;
  }
`;
export const DevInfoRole = styled.p`
  font-size: 1.3rem;
  @media (max-width: 850px) {
    font-size: 1rem;
  }
`;
export const DevContainerLinks = styled.div`
  margin: 10px auto;
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

export const SocialNetworkImage = styled.img`
  transform: scale(1.1);
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
