import {
  BackgroundVideo,
  FlexContainer,
  MainContainer,
} from "../styles/HomePage.styled";
import {
  LoginFormLink,
  LoginButton,
  LoginForm,
  LoginFormik,
  LoginInputs,
  LoginMainContainer,
  LoginFormLinksContainer,
} from "../styles/Login.styled";
import { motion } from "framer-motion";
import axios from "axios";
import { FormikHelpers, FormikValues, Form } from "formik";
import { useNavigate } from "react-router-dom";

export interface FormValues extends FormikValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const initialValues: FormValues = { email: "", password: "" };
  const submissionHandler = async (
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await axios.post("http://localhost:3005/login", {
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
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{ width: "100vw", height: "100vh" }}
        >
          <LoginMainContainer>
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
                <LoginButton type="submit">Log in</LoginButton>
                <LoginFormLinksContainer>
                  <LoginFormLink to="#">Fogot Password</LoginFormLink>
                  <LoginFormLink to="/registration">
                    Create Account
                  </LoginFormLink>
                </LoginFormLinksContainer>
              </LoginForm>
            </LoginFormik>
          </LoginMainContainer>
        </motion.div>
      </FlexContainer>
    </MainContainer>
  );
};

export default LoginPage;
