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

const CreateStorySchema = Yup.object().shape({
  articlesName: Yup.string().max(50, "Too Long!").required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(250, "Too Long!")
    .required("Required"),
});

const CreateStory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const uploadFanfic = (story: Story) => {
    // dispatch(addFanfic(values));
    // dispatch(postStory(story));
    console.log(story);
  };
  const initialValues: Story = {
    author: "",
    articlesName: "",
    description: "",
    content: "",
    picture: "",
  };
  return (
    <MainContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateStorySchema}
        onSubmit={uploadFanfic}
      >
        {({ errors, touched }) => (
          <BookContainer>
            <BookSide>
              <h2>Title: Author from redux</h2>
            </BookSide>
            <BookSide>
              <label htmlFor="fanficName">Fanfic name</label>
              <Field name="articlesName" id="fanficName" type="text" />
              {errors.articlesName && touched.articlesName ? (
                <div>{errors.articlesName}</div>
              ) : null}
              <label htmlFor="fanficDescription">Description</label>
              <Field name="description" id="fanficDescription" type="text" />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
              <button type="submit"> Save </button>
            </BookSide>
          </BookContainer>
        )}
      </Formik>
    </MainContainer>
  );
};

export default CreateStory;
