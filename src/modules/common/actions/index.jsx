import {hashHistory} from 'react-router';

import {firebaseAuth} from 'Firebase/config';
import CommonActionTypes from '../constants';

function isLogOutSuccess() {
    return {
        type: CommonActionTypes.LOGOUT_SUCCESS
    };
}

function isLogOutFailed(payload) {
    return {
        type: CommonActionTypes.LOGOUT_ERROR,
        payload
    };
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

export default attemptToLogout;