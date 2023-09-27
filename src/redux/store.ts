import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storySlice from "./slices/storySlice";
import userSlice from "./slices/userSlice";
import themeSlice from "./slices/themeSlice";

export const rootReducer = combineReducers({
  storySlice,
  userSlice,
  themeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
