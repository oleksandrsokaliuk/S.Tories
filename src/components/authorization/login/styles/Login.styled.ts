import { Link } from "react-router-dom";
import styled from "styled-components";
import { Field, Formik, Form } from "formik";
import { FormValues } from "../../../../types/types";
import { motion } from "framer-motion";

export const LoginMainContainer = styled(motion.div)`
  flex: 10 10 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
  }
`;

export const LoginFormik = styled(Formik)<FormValues>``;

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  min-width: 30%;
  gap: 33px;
  @media (max-width: 850px) {
  }
  @media (max-width: 1080px) {
  }
`;

export const AuthForm = styled(LoginForm)``;

export const PasswordContainer = styled.div`
  background: #f8faff;
  border-radius: 50px;
  position: relative;
  flex: 4 4 50px;
  display: flex;
  padding-right: 30px;
  &:focus-within {
    border: 1px solid rgba(25, 25, 23, 0.5);
  }
`;

export const LoginInputs = styled(Field)`
  background: #f8faff;
  border-radius: 50px;
  font-size: 1.5rem;
  color: #191917;
  border: none;
  flex: 4 4 50px;
  padding-left: 29px;
  font-family: Josefin Sans;
  display: flex;
  align-items: center;

  &::placeholder {
    font-size: 1.5rem;
    color: rgba(25, 25, 23, 0.5);
    text-transform: capitalize;
  }
  &:focus {
    outline: none;
    border: 1px solid rgba(25, 25, 23, 0.5);
    color: rgba(25, 25, 23, 0.5);
  }

  &[name="password"],
  &[name="confirmPassword"] {
    flex: 1 1 50px;
    &:focus {
      outline: none;
      border: none;
    }
  }

  @media (max-width: 850px) {
  }
`;

export const EyeIcon = styled.img`
  max-height: 80%;
  align-self: center;
  cursor: pointer;
`;

export const RegistrationInputs = styled(LoginInputs)`
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
  }
`;

export const LoginButton = styled.button`
  flex: 4 4 50px;
  font-size: 1.2rem;
  color: white;
  font-family: "Rock Salt";
  font-style: normal;
  font-weight: 400;
  border: none;
  border-radius: 50px;
  background: #191917;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
  }
  @media (max-width: 850px) {
  }
`;

export const RegistrationButton = styled(LoginButton)`
  font-size: 1.2rem;

  &:hover {
  }
  @media (max-width: 850px) {
  }
`;

export const LoginFormLinksContainer = styled.div`
  flex: 1 1 20px;
  display: flex;
  justify-content: space-between;
`;

export const LoginFormLink = styled(Link)`
  color: #191917;
  font-family: "Gruppo";
  font-weight: 400;
  text-transform: capitalize;
  padding: 0 29px;
`;

export const RememberMeContainer = styled.div`
  flex: 1 1 20px;
  display: flex;
  justify-content: flex-end;
  color: #191a17;
  font-family: Josefin Sans;
  font-size: 1em;
`;

export const RememberMeLabel = styled.label`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1em;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  padding-right: 10px;
  display: flex;
  flex-direction: row-reverse;
`;
