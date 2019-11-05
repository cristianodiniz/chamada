import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";

import { getFirestore, reduxFirestore } from "redux-firestore";

import logger from "./logger";
import firebase from "../config/fbConfig";
import { whenFirebaseLoginIsLoadedMiddleware } from "../store/actions/authActions";

const getFirebase = () => firebase;


export default compose(
    applyMiddleware(
        thunk.withExtraArgument({ getFirebase, getFirestore }),
        logger,
        whenFirebaseLoginIsLoadedMiddleware
    ),
    reduxFirestore(firebase)
);
