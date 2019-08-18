import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import participants from "./participants";


export default combineReducers({
  participants,
  loadingBar: loadingBarReducer
});