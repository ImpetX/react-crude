import ActionTypes from './types';

function isLoginAttempt() {
    return {
        type: ActionTypes.ATTEMPTING_LOGIN,
    };
}

function isLoginSuccess(email, password) {
    return {
        type: ActionTypes.LOGGED_IN,
        email,
        password
    };
}

function isLoginFailed(email, password) {
    return {
        type: ActionTypes.LOGGED_IN_ERROR,
        email,
        password
    };
}

function isLogOut() {
    return {
        type: ActionTypes.LOGOUT
    };
}

function attemptToLogin(email, password) {
    return function(dispatch) {
        dispatch(isLoginAttempt());
    }
}