import { Form, Formik } from "formik";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  height: 90vh;
`;

export const BookContainer = styled(Form)`
  flex: 1;
  display: flex;
  margin: 5%;
  border: 1px solid black;
`;

export const BookSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5%;
  & > label {
    flex: 1;
  }
  & > input {
    flex: 5;
    background-color: transparent;
  }
`;
