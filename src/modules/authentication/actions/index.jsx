import ActionTypes from './types';

function isLoginAttempt(email, password) {
    return {
        type: ActionTypes.ATTEMPTING_LOGIN,
        isLoggedIn: false,
        email,
        password
    };
}

function isLoginSuccess(email, password) {
    return {
        type: ActionTypes.LOGGED_IN,
        isLoggedIn: true,
        email,
        password
    };
}

function isLoginFailed(email, password) {
    return {
        type: ActionTypes.LOGGED_IN_ERROR,
        isLoggedIn: false,
        email,
        password
    };
}

function isLogOut() {
    return {
        type: ActionTypes.LOGOUT,
        isLoggedIn: false
    };
}