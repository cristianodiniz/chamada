import { UPDATE_AUTH_STATUS } from "../actions/authActions";

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
