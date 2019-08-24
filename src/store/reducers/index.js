import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import participants from "./participants";
import schedule from "./schedules";
import errors from "./errors"

export default combineReducers({
  participants,
  schedule,
  errors,
  loadingBar: loadingBarReducer
});