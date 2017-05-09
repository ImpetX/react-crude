import ActionTypes from '../constants';
import CommonActionTypes from 'modules/common/constants';

const defaultState = {
    authenticated: false
};

const AuthReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.ATTEMPTING_LOGIN:
            return Object.assign({}, state, {
                authenticated: 'pending'
            });

        case ActionTypes.LOGGED_IN:
            return Object.assign({}, state, {
                authenticated: true,
                uid: action.payload.uid,
                email: action.payload.email,
                displayName: 'Admin'
            });

        case ActionTypes.LOGGED_IN_ERROR:
            return Object.assign({}, state, {
                authenticated: false,
                uid: null,
                email: null,
                displayName: null,
                errorCode: action.payload.code
            });

        case CommonActionTypes.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                authenticated: false,
                uid: null,
                email: null,
                displayName: null
            });

        case CommonActionTypes.LOGOUT_ERROR:
            return Object.assign({}, state, {
                authenticated: false,
                uid: null,
                email: null,
                displayName: null,
                logoutErrorCode: action.payload.code
            });

        case ActionTypes.VERIFY_AUTH_USER:
            return Object.assign({}, state, {
                authenticated: true
            });

        default:
            return state;
    }
};

export default AuthReducer;