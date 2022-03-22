import { createSlice, Dispatch } from "@reduxjs/toolkit";
import api from "../app/api";
import { Diseased, diseaseList, Healthy } from "../utils";
interface PredictionState {
  isLoading: boolean;
  predicted_result: Diseased | Healthy | undefined;
  errors: "";
}
const initialState = {
  isLoading: false,
  predicted_result: undefined,
  errors: "",
} as PredictionState;

const prediction = createSlice({
  name: "prediction",
  initialState,
  reducers: {
    initLoader: (state) => {
      state.isLoading = true;
    },
    clearLoader: (state) => {
      state.isLoading = false;
    },
    setResult: (state, { payload }) => {
      state.predicted_result = diseaseList[payload];
    },
    setError: (state, { payload }) => {
      state.errors = payload;
    },
  },
});
export const { initLoader, clearLoader, setResult, setError } =
  prediction.actions;

export const diagnoseImage = (file: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(initLoader());
    try {
      const { data } = await api.post<{ prediction: string }>("predict", file);
      dispatch(setResult(data.prediction));
    } catch (err) {
      console.error(err);
      alert("Something went Wrong, Try Again");
    }
    dispatch(clearLoader());
  };
};
export default prediction.reducer;
