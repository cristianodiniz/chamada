import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";
import logger from "./logger";

import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
export default compose(
  applyMiddleware(
    thunk.withExtraArgument({ getFirebase, getFirestore }),
    logger
  ),
  // reduxFirestore(fdConfig,{ attachAuthIsReady: true}),
  // reactReduxFirebase(fdConfig)

);
