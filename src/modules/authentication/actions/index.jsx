import {firebaseAuth} from 'firebase/config';
import ActionTypes from './types';

function isLoginAttempt() {
    return {
        type: ActionTypes.ATTEMPTING_LOGIN,
    };
}

function isLoginSuccess(email, password, payload) {
    return {
        type: ActionTypes.LOGGED_IN,
        email,
        password,
        payload
    };
}

function isLoginFailed(email, password, payload) {
    return {
        type: ActionTypes.LOGGED_IN_ERROR,
        email,
        password,
        payload
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

        firebaseAuth.signInWithEmailAndPassword(email, password)
            .then(function(userInfo) {
                dispatch(isLoginSuccess(email, password, userInfo));
            })

            .catch(function(error) {
                dispatch(isLoginFailed(email, password, errorCode, error));
            });
    }
}

export {
    attemptToLogin
};