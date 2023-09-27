import { createSlice } from "@reduxjs/toolkit";

export enum ThemeType {
  LIGHT,
  DARK,
}

interface CurrentTheme {
  currentTheme: ThemeType;
}

const initialState: CurrentTheme = {
  currentTheme: ThemeType.LIGHT,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.currentTheme =
        state.currentTheme === ThemeType.LIGHT
          ? ThemeType.DARK
          : ThemeType.LIGHT;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
