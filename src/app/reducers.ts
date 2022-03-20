import { combineReducers } from "@reduxjs/toolkit";
import predictionSlice from "../modules/prediction.slice";
export default combineReducers({
  prediction: predictionSlice,
});
