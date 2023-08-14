import {
  BackgroundVideo,
  FlexContainer,
  MainContainer,
} from "../styles/HomePage.styled";
import {
  RegistrationButton,
  RegistrationInputs,
  AuthForm,
  LoginFormik,
  LoginMainContainer,
  LoginFormLinksContainer,
  LoginInputs,
  LoginButton,
  LoginForm,
} from "../styles/Login.styled";
import { motion } from "framer-motion";
import axios from "axios";
import { FormikHelpers, FormikValues, Form } from "formik";
import { useNavigate } from "react-router-dom";

export interface FormValues extends FormikValues {
  email: string;
  password: string;
}

const RegistrationPage = () => {
  const navigate = useNavigate();
  const initialValues: FormValues = { email: "", password: "" };
  const submissionHandler = async (
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await axios.post("http://localhost:3005/registration", {
        ...values,
      });
      console.log(response);
      response && navigate("/");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <MainContainer>
      <FlexContainer>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.5, y: -100 }}
          transition={{ duration: 0.3 }}
          style={{ width: "100vw", height: "100vh", borderRadius: "none" }}
        >
          <LoginMainContainer></LoginMainContainer>
          <LoginFormik
            initialValues={initialValues}
            onSubmit={submissionHandler}
          >
            <LoginForm>
              <LoginInputs
                name="email"
                id="email"
                type="email"
                placeholder="E-Mail"
              />
              <LoginInputs
                name="password"
                id="password"
                type="password"
                placeholder="Password"
              />
              <LoginButton type="submit">Create Account</LoginButton>
            </LoginForm>
          </LoginFormik>
        </motion.div>
      </FlexContainer>
    </MainContainer>
  );
};

export default RegistrationPage;
