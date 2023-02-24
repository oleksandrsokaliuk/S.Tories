import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5% 10% 10% 10%;
  width: 80%;
  height: 70%;
  background: rgba(216, 218, 213, 0.3);
  backdrop-filter: blur(35px);
  border-radius: 355px;
  margin-top: 15%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 40%;
  @media (max-width: 850px) {
    padding-top: 15%;
    padding-bottom: 15%;
  }
`;

export const LoginInputs = styled.input`
  height: 20%;
  width: 100%;
  padding: 5px 10px;
  background: #d8dad5;
  border-radius: 50px;
  font-size: 1rem;
  color: #191917;
  &::placeholder {
    font-size: 1rem;
    color: rgba(25, 25, 23, 0.5);
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 850px) {
    height: 15%;
  }
`;
export const LoginButton = styled.button`
  font-size: 1.2rem;
  color: white;
  font-family: "Rock Salt";
  font-style: normal;
  font-weight: 400;
  border: none;
  width: 100%;
  height: 20%;
  border-radius: 50px;
  background: rgba(49, 56, 44, 0.56);
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
  }
  @media (max-width: 850px) {
    height: 15%;
  }
`;

export const LoginFormLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &: nth-child(2) {
    align-self: flex-end;
  } ;
`;

export const LoginFormLink = styled(Link)`
  font-size: 0.9rem;
  color: #191917;
  font-family: "Gruppo";
  font-weight: 400;
`;
