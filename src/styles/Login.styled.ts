import { Link } from "react-router-dom";
import styled from "styled-components";
import { Field, Formik, Form } from "formik";
import { FormValues } from "../components/LoginPage";

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5% 10% 10% 10%;
  width: 550px;
  height: 550px;
  background: rgba(216, 218, 213, 0.3);
  backdrop-filter: blur(35px);
  border-radius: 50%;
  margin: 13% auto;
  @media (max-width: 750px) {
    width: 450px;
    height: 450px;
    margin-top: 40%;
  }
`;

export const LoginFormik = styled(Formik)<FormValues>`
  width: 100%;
  height: 200px;
`;

export const LoginForm = styled(Form)<FormValues>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin-top: 10%;
  @media (max-width: 850px) {
    padding-top: 15%;
    padding-bottom: 15%;
    width: 70%;
  }
  @media (max-width: 1080px) {
    width: 80%;
  }
`;

export const AuthForm = styled(LoginForm)`
  height: 50%;
`;

export const LoginInputs = styled(Field)`
  height: 70px;
  width: 100%;
  padding: 5px 10px;
  background: #d8dad5;
  border-radius: 50px;
  font-size: 1rem;
  color: #191917;
  border: none;
  &::placeholder {
    font-size: 1rem;
    color: rgba(25, 25, 23, 0.5);
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 850px) {
    height: 50px;
  }
`;

export const RegistrationInputs = styled(LoginInputs)`
  height: 20px;
  width: 50%;
  padding: 5px 10px;
  background: #d8dad5;
  border-radius: 50px;
  font-size: 0.5rem;
  color: #191917;
  border: none;
  &::placeholder {
    font-size: 1rem;
    color: rgba(25, 25, 23, 0.5);
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 850px) {
    height: 50px;
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
  height: 70px;
  border-radius: 50px;
  background: rgba(49, 56, 44, 0.56);
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
  }
  @media (max-width: 850px) {
    height: 50px;
  }
`;

export const RegistrationButton = styled(LoginButton)`
  font-size: 1.2rem;
  width: 50%;
  height: 20px;

  &:hover {
  }
  @media (max-width: 850px) {
    height: 50px;
  }
`;

export const LoginFormLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LoginFormLink = styled(Link)`
  font-size: 0.9rem;
  color: #191917;
  font-family: "Gruppo";
  font-weight: 400;
`;
