// #region CREATE_MESSAGE
export const CREATE_SUCCESS_MESSAGE = "CREATE_SUCCESS_MESSAGE";
export const CREATE_ERROR_MESSAGE = "CREATE_MESSAGE";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";

export const createErrorMessage = (message, detail) => {
    return {
        type: CREATE_ERROR_MESSAGE,
        message: { message, detail }
    };
};

export const createSuccessMessage = (message, detail) => {
    return {
        type: CREATE_SUCCESS_MESSAGE,
        message: { message, detail }
    };
};

export const clearMessages = () => {
    return {
        type: CLEAR_MESSAGES
    };
};

// #endregion CREATE_ERROR_MESSAGE
