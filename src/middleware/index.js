import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";
// import { getFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";

import logger from "./logger";
import firebase from "../config/fbConfig";

const getFirebase = () => firebase

export default compose(
  applyMiddleware(
    thunk.withExtraArgument({ getFirebase, getFirestore }),
    logger
  ),
  reduxFirestore(firebase)
);
