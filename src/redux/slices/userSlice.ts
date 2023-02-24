import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  username: string;
  role: string;
}

const initialState = {
  user: { username: "", role: "" } as IUser,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsername: (state, action) => {
      state.user = { ...action.payload.user };
    },
  },
});

export const { addUsername } = userSlice.actions;

export default userSlice.reducer;
