import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { addFanfic } from "../redux/slices/fanficSlice";
import { postStory } from "../../redux/slices/storySlice";
import { AppDispatch } from "../../redux/store";
import { Story } from "../../types/Story";
import {
  BookContainer,
  BookSide,
  MainContainer,
} from "./styles/CreateStory.styled";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import LoginPage from "../authorization/login/LoginPage";
import api from "../../api/api";

const CreateStorySchema = Yup.object().shape({
  title: Yup.string().max(50, "Too Long!").required("Required"),
  content: Yup.string()
    .min(2, "Too Short!")
    .max(250, "Too Long!")
    .required("Required"),
});

const CreateStory = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const [iseUserSignedIn, setUserSignedIn] = useState<boolean>(false);
  const [isResponseSuccessfull, setResponseSuccessfull] =
    useState<boolean>(false);
  useEffect(() => {
    setResponseSuccessfull(false);
    console.log({ cookiesInCreateStory: cookies });
    !Object.keys(cookies).length
      ? setUserSignedIn(false)
      : setUserSignedIn(true);
  }, []);
  const dispatch = useDispatch<AppDispatch>();
  const addStoryToDB = async (story: Story) => {
    // dispatch(addFanfic(values));
    // dispatch(postStory(story));
    console.log(story);
    const response = await dispatch(
      postStory({ story, accessToken: cookies.token })
    );
    response.meta.requestStatus === "fulfilled"
      ? setResponseSuccessfull(true)
      : setResponseSuccessfull(false);
    console.log({ response });
  };
  const initialValues: Story = {
    title: "",
    content: "",
    published: false,
  };
  return iseUserSignedIn ? (
    <MainContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateStorySchema}
        onSubmit={addStoryToDB}
      >
        {({ errors, touched }) => (
          <BookContainer>
            <BookSide>
              <label htmlFor="title">Title:</label>
              <Field name="title" id="title" type="text" />
            </BookSide>
            <BookSide>
              <label htmlFor="content">Story:</label>
              <Field name="content" id="content" type="text" />
              {errors.title && touched.content && <div>{errors.content}</div>}
              <div>
                <button type="submit"> Save </button>
                <div>
                  <label htmlFor="published">Publish:</label>
                  <Field name="published" id="published" type="checkbox" />
                  {errors.title && touched.content && (
                    <div>{errors.published}</div>
                  )}
                </div>
                {isResponseSuccessfull && (
                  <p>The story is saved successfully</p>
                )}
              </div>
            </BookSide>
          </BookContainer>
        )}
      </Formik>
    </MainContainer>
  ) : (
    <>
      <h1> You have to Sign In first </h1>
      <LoginPage />
    </>
  );
};

export default CreateStory;
