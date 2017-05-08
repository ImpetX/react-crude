import ActionTypes from '../constants';

const isLoggedInTrue = {
    authenticated: true
};

const isLoggedInFalse = {
    authenticated: false
};

const isAuthInProcess = {
    authenticated: 'pending'
};

const authFailedState = {
    uid: null,
    email: null,
    displayName: null
};

const defaultState = isLoggedInFalse;

const AuthReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.ATTEMPTING_LOGIN:
            return Object.assign({}, state, isAuthInProcess);

        case ActionTypes.LOGGED_IN:
            return Object.assign({}, state, isLoggedInTrue, {
                uid: action.payload.uid,
                email: action.payload.email,
                displayName: 'Admin'
            });

        case ActionTypes.LOGGED_IN_ERROR:
            return Object.assign({}, state, isLoggedInFalse, authFailedState, {
                errorCode: action.payload.code
            });

        case ActionTypes.LOGOUT_SUCCESS:
            return Object.assign({}, state, isLoggedInFalse, authFailedState);

        case ActionTypes.LOGOUT_ERROR:
            return Object.assign({}, state, isLoggedInFalse, authFailedState);

        case ActionTypes.VERIFY_AUTH_USER:
            return Object.assign({}, state, isLoggedInTrue);

        default:
            return state;
    }
};

export default AuthReducer;