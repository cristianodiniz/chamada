import {
    CREATE_ERROR_MESSAGE,
    CREATE_SUCCESS_MESSAGE,
    CLEAR_MESSAGES
} from "../actions/messengerActions";

export const initialState = {
    error: { message: null },
    success: { message: null }
};

export default function messenger(state = initialState, action) {
    switch (action.type) {
        case CREATE_ERROR_MESSAGE:
            return {
                ...state,
                error: { ...action.message }
            };

        case CREATE_SUCCESS_MESSAGE:
            return {
                ...state,
                success: { ...action.message }
            };
        case CLEAR_MESSAGES:
            return {
                ...state,
                ...initialState
            };

        default:
            return state;
    }
}
