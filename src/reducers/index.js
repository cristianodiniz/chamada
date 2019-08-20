import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import participants from "./participants";
import schedule from "./schedules";


export default combineReducers({
  participants,
  schedule,
  loadingBar: loadingBarReducer
});