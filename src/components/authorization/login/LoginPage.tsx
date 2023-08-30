import {
  LoginFormLink,
  LoginButton,
  LoginForm,
  LoginFormik,
  LoginInputs,
  LoginMainContainer,
  LoginFormLinksContainer,
  RememberMeContainer,
  RememberMeLabel,
  PasswordContainer,
  EyeIcon,
} from "./styles/Login.styled";
import { motion } from "framer-motion";
import axios from "axios";
import { FormikHelpers, Form, Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { FormValues } from "../../../types/types";
import { Link } from "react-router-dom";
import { SEOLabel } from "../../../styles/seo.styles";
import EyeOpened from "./../../../assets/eye-opend.svg";
import { locations } from "../../../routing/Routing";

const LoginPage = () => {
  const navigate = useNavigate();
  const initialValues: FormValues = {
    email: "",
    password: "",
    stayAuth: false,
  };
  const submissionHandler = async (
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) => {
    // try {
    //   const response = await axios.post("http://localhost:3005/login", {
    //     ...values,
    //   });
    //   console.log(response);
    //   response && navigate("/");
    //   return response.data;
    // } catch (err) {
    //   console.log(err);
    // }
    console.log(values);
  };
  return (
    <LoginMainContainer
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <LoginFormik initialValues={initialValues} onSubmit={submissionHandler}>
        <LoginForm>
          <SEOLabel htmlFor="email">email</SEOLabel>
          <LoginInputs
            type="email"
            id="email"
            name="email"
            placeholder="e-mail"
            autoComplete="off"
            autoFocus
          />
          <PasswordContainer>
            <SEOLabel htmlFor="password">password</SEOLabel>
            <LoginInputs
              type="password"
              id="password"
              name="password"
              placeholder="password"
              autoComplete="off"
            />
            <EyeIcon src={EyeOpened} alt="Show password" />
          </PasswordContainer>
          <RememberMeContainer>
            <RememberMeLabel htmlFor="stayAuth">
              <Field type="checkbox" id="stayAuth" name="stayAuth" />
              Remember Me
            </RememberMeLabel>
          </RememberMeContainer>
          <LoginButton type="submit">Log In</LoginButton>
          <LoginFormLinksContainer>
            <LoginFormLink to="#">forgot password</LoginFormLink>
            <LoginFormLink to={locations.registrationPage}>
              create account
            </LoginFormLink>
          </LoginFormLinksContainer>
        </LoginForm>
      </LoginFormik>
    </LoginMainContainer>
  );
};

export default LoginPage;
