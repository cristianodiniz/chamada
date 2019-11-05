import {
    createErrorMessage,
    createSuccessMessage
} from "./actions/messengerActions";

export const signIn = credentials => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(resp => {
                dispatch(createSuccessMessage("Successful login!", resp));
            })
            .catch(err => {
                const { message } = err;
                dispatch(createErrorMessage(message, err));
            });
    };
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signOut()
            .then(resp => {
                dispatch(createSuccessMessage("Successful logout!", resp));
            });
    };
};

export const signUp = credentials => {
    return (dispatch, getState, { getFirebase }) => {
        const { email, organization, password } = credentials;

        if (!(email && organization && password)) {
            dispatch(createErrorMessage("Inform all the fields", null));
            return;
        } else {
            const firebase = getFirebase();

            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    user.sendEmailVerification();
                    dispatch(createSuccessMessage("Successful logout!", user));
                })
                .catch(err => {
                    const { message } = err;
                    dispatch(createErrorMessage(message, err));
                });
        }
    };
};

export const UPDATE_AUTH_STATUS = "UPDATE_AUTH_STATUS";

export const setIsAuthenticated = value => {
    return {
        type: UPDATE_AUTH_STATUS,
        isAuthenticated: value
    };
};

export const whenFirebaseLoginIsLoadedMiddleware = store => next => action => {
    const returnValue = next(action);
    const { firebase } = store.getState();

    if (action.type === "@@reactReduxFirebase/LOGIN") {
        const isAuthenticated = firebase.isLoaded
            ? firebase.auth.emailVerified
            : false;
        store.dispatch(setIsAuthenticated(isAuthenticated));

        console.log("isAuthenticated", isAuthenticated);
    }

    return returnValue;
};




const initState = {
    isAuthenticated: false
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_AUTH_STATUS: {
            return { ...state, ...action };
        }
        default:
            return state;
    }
};

export default authReducer;
