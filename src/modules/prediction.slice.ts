import { createSlice, Dispatch } from "@reduxjs/toolkit";
import api from "../app/api";
import { diseaselist } from "../utils";

const prediction = createSlice({
  name: "prediction",
  initialState: {
    isLoading: false,
    predicted_result: "",
    errors: "",
    isFailed: false,
  },
  reducers: {
    initLoader: (state) => {
      state.isLoading = true;
    },
    clearLoader: (state) => {
      state.isLoading = false;
    },
    setResult: (state, { payload }) => {
      state.predicted_result = diseaselist[payload];
    },
    setError: (state, { payload }) => {
      state.errors = payload;
      state.isFailed = true;
    },
  },
});
export const { initLoader, clearLoader, setResult, setError } =
  prediction.actions;

export const diagnoseImage = (file: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(initLoader());
    const { data } = await api.post<{ prediction: string }>("predict", file);
    dispatch(setResult(data.prediction));
    dispatch(clearLoader());
  };
};
export default prediction.reducer;
