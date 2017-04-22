import ActionTypes from '../constants';

const isLoggedInTrue = {
    isLoggedIn: true
};

const isLoggedInFalse = {
    isLoggedIn: false
};

const isAuthInProcess = {
    isLoggedIn: 'pending'
}

const authSuccessState = {
    uid: action.payload.uid,
    email: action.payload.email,
    displayName: 'Admin'
};

const authFailedState = {
    uid: null,
    email: null,
    displayName: null
}

const defaultState = isLoggedInFalse;

const AuthReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.ATTEMPTING_LOGIN:
            return Object.assign({}, state, isAuthInProcess);

        case ActionTypes.LOGGED_IN:
            return Object.assign({}, state, isLoggedInTrue, authSuccessState);

        case ActionTypes.LOGGED_IN_ERROR:
            return Object.assign({}, state, isLoggedInFalse, authFailedState);

        case ActionTypes.LOGOUT_SUCCESS:
            return Object.assign({}, state, isLoggedInFalse, authFailedState);

        case ActionTypes.LOGOUT_ERROR:
            return Object.assign({}, state, isLoggedInFalse, authFailedState);

        default:
            return state;
    }
};

export default AuthReducer;