import {firebaseAuth} from 'Firebase/config';
import ActionTypes from '../constants';

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

function isLogOutSuccess() {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    };
}

function isLogOutFailed(payload) {
    return {
        type: ActionTypes.LOGOUT_ERROR,
        payload
    };
}

function isVerifiedUser() {
    return {
        type: ActionTypes.VERIFY_AUTH_USER
    }
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

function attemptToLogout() {
    return function(dispatch) {
        firebaseAuth.signOut()
            .then(function() {
                dispatch(isLogOutSuccess());
            })

            .catch(function(error) {
                dispatch(isLogOutFailed(error));
            });
    }
}

function verifyAuth() {
    return function(dispatch) {
        firebaseAuth.onAuthStateChanged(
            function(user) {
                if(user) {
                    dispatch(isVerifiedUser());
                }

                else {
                    dispatch(attemptToLogout());
                }
            }
        )
    }
}

export {
    attemptToLogin,
    attemptToLogout
};