import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import { firestoreReducer } from "redux-firestore";

import participants from "./participants";
import schedule from "./schedules";
import errors from "./errors";
import authReducer from './authReducer'

export default combineReducers({
  participants,
  schedule,
  auth: authReducer,
  errors,
  loadingBar: loadingBarReducer,
  firestore : firestoreReducer
});
