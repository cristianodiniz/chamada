import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";
import logger from "./logger";

import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import fdConfig from "../config/fbConfig";
export default compose(
  applyMiddleware(
    thunk.withExtraArgument({ getFirebase, getFirestore }),
    logger
  ),
  reduxFirestore(fdConfig),
  reactReduxFirebase(fdConfig)
);
