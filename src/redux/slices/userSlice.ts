import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  email: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  role?: string;
}

const initialState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    picture: "",
    role: "",
  } as IUser,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = { ...action.payload };
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
