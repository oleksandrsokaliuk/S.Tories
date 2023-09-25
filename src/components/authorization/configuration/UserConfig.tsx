import { FC } from "react";
import {
  LoginButton,
  LoginForm,
  LoginFormik,
  LoginInputs,
  LoginMainContainer,
  PasswordContainer,
} from "../login/styles/Login.styled";
import { SEOLabel } from "../../../styles/seo.styles";
import { FormValues } from "../../../types/types";
import { FormikHelpers } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import axios from "axios";

const UserConfig: FC = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
    stayAuth: false,
  };
  const submissionHandler = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await axios.put("http://localhost:3001/auth/update", {
        ...values,
      });

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
    } catch (err) {
      console.error(err);
      setSubmitting(false); // Сброс флага отправки при ошибке
    }
  };
  const userData = useSelector((state: RootState) => state.userSlice.user);
  return (
    <>
      <LoginMainContainer
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <LoginFormik initialValues={initialValues} onSubmit={submissionHandler}>
          <LoginForm>
            <SEOLabel htmlFor="email">Email</SEOLabel>
            <LoginInputs
              type="email"
              id="email"
              name="email"
              placeholder={userData?.email ? userData.email : "E-mail"}
            />
            <SEOLabel htmlFor="firstname">First Name</SEOLabel>
            <LoginInputs
              type="text"
              id="firstname"
              name="firstname"
              placeholder={
                userData?.firstName ? userData.firstName : "First name"
              }
            />
            <SEOLabel htmlFor="lastname">Last Name</SEOLabel>
            <LoginInputs
              type="text"
              id="lastname"
              name="lastname"
              placeholder={userData?.lastName ? userData.lastName : "Last name"}
            />
            <LoginButton type="submit">Change Data</LoginButton>
          </LoginForm>
        </LoginFormik>
      </LoginMainContainer>
    </>
  );
};

export default UserConfig;
