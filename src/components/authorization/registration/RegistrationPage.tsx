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
} from "./../login/styles/Login.styled";
import { motion } from "framer-motion";
import axios from "axios";
import { FormikHelpers, Form, Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { FormValues } from "../../../types/types";
import { Link } from "react-router-dom";
import { SEOLabel } from "../../../styles/seo.styles";
import EyeOpened from "./../../../assets/eye-opend.svg";
import { useState } from "react";

enum PasswordType {
  PASSWORD = "password",
  CONFIRMPASSWORD = "confirmPassword",
}

const RegistrationPage = () => {
  const [passwordChecked, setPasswordChecked] = useState<{
    password: boolean;
    confirmPassword: boolean;
  }>({ password: false, confirmPassword: false });
  const showPasswordHandler = (input: PasswordType) => {
    if (input === PasswordType.PASSWORD) {
      setPasswordChecked((prevState) => {
        return { ...prevState, password: !prevState.password };
      });
    }
    if (input === PasswordType.CONFIRMPASSWORD) {
      setPasswordChecked((prevState) => {
        return { ...prevState, confirmPassword: !prevState.confirmPassword };
      });
    }
  };
  const navigate = useNavigate();
  const initialValues: FormValues = {
    email: "",
    password: "",
    confirmPassword: "",
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
    if (values.password !== values.confirmPassword) {
      return new Error("The passwords do not match");
    }
  };
  return (
    <LoginMainContainer
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <LoginFormik
        initialValues={initialValues}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        <LoginForm>
          <SEOLabel htmlFor="email">email</SEOLabel>
          <LoginInputs
            type="email"
            id="email"
            name="email"
            placeholder="e-mail"
          />
          <PasswordContainer>
            <SEOLabel htmlFor="password">password</SEOLabel>
            <LoginInputs
              type={passwordChecked.password ? "text" : "password"}
              id="password"
              name="password"
              placeholder="password"
            />
            <EyeIcon
              onClick={() => {
                showPasswordHandler(PasswordType.PASSWORD);
              }}
              src={EyeOpened}
              alt="Show password"
            />
          </PasswordContainer>
          <PasswordContainer>
            <SEOLabel htmlFor="password">confirm password</SEOLabel>
            <LoginInputs
              type={passwordChecked.confirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm password"
            />
            <EyeIcon
              onClick={() => {
                showPasswordHandler(PasswordType.CONFIRMPASSWORD);
              }}
              src={EyeOpened}
              alt="Show password"
            />
          </PasswordContainer>
          <RememberMeContainer>
            <RememberMeLabel htmlFor="stayAuth">
              <Field type="checkbox" id="stayAuth" name="stayAuth" />
              Remember Me
            </RememberMeLabel>
          </RememberMeContainer>
          <LoginButton type="submit">sign up</LoginButton>
        </LoginForm>
      </LoginFormik>
    </LoginMainContainer>
  );
};

export default RegistrationPage;
