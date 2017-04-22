import ActionTypes from '../constants';

const defaultState = {};

const isLoggedInTrue = {
    isLoggedIn: true,
    uid: action.payload.uid,
    email: action.payload.email,
    displayName: 'Admin'
};

const isLoggedInFalse = {
    isLoggedIn: false,
    uid: null,
    email: null,
    displayName: null
};

const AuthReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.ATTEMPTING_LOGIN:
            return Object.assign({}, state, isLoggedInFalse);

        case ActionTypes.LOGGED_IN:
            return Object.assign({}, state, isLoggedInTrue);

        case ActionTypes.LOGGED_IN_ERROR:
            return Object.assign({}, state, isLoggedInFalse);

        case ActionTypes.LOGOUT_SUCCESS:
            return Object.assign({}, state, isLoggedInFalse);

        case ActionTypes.LOGOUT_ERROR:
            return Object.assign({}, state, isLoggedInFalse);

        default:
            return state;
    }
};

export default AuthReducer;