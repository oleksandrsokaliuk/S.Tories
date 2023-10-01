import { createSlice } from "@reduxjs/toolkit";

export enum ThemeType {
  LIGHT,
  DARK,
}

interface CurrentTheme {
  currentTheme: ThemeType;
  mainPage: boolean;
}

const initialState: CurrentTheme = {
  currentTheme: ThemeType.LIGHT,
  mainPage: false,
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
    setMainPage: (state) => {
      state.mainPage = !state.mainPage;
      console.log({ state: state.mainPage });
    },
  },
});

export const { changeTheme, setMainPage } = themeSlice.actions;

export default themeSlice.reducer;
