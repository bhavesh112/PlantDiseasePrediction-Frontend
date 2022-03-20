import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare(),
});

export type RootState = ReturnType<typeof store.getState>;
