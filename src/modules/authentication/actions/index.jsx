import {hashHistory} from 'react-router';

import {firebaseAuth} from 'Firebase/config';
import ActionTypes from '../constants';
import CommonActionTypes from 'modules/common/constants';
import attemptToLogout from 'modules/common/actions';

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

function verifyAuth() {
    return dispatch => {
        firebaseAuth.onAuthStateChanged(
            user => {
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