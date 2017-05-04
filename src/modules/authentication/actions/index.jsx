import {hashHistory} from 'react-router';

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
    return dispatch => {
        dispatch(isLoginAttempt());

        firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(userInfo => {
            dispatch(isLoginSuccess(email, password, userInfo));
            hashHistory.push('/');
        })

        .catch(error => {
            dispatch(isLoginFailed(email, password, error));
        });

    }
}

function attemptToLogout() {
    return dispatch => {
        firebaseAuth.signOut()
            .then(() => {
                dispatch(isLogOutSuccess());
            })

            .catch(error => {
                dispatch(isLogOutFailed(error));
            });
    }
}

function verifyAuth() {
    return dispatch => {
        firebaseAuth.onAuthStateChanged(
            user => {
                console.log('onAuthStateChanged user', user);
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
    attemptToLogout,
    verifyAuth
};