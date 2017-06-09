import ActionTypes from '../constants';

const defaultState = {};

const MemberListReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.GET_MEMBER_PENDING:
            return Object.assign({}, state, {
                showLoader: true
            });

        case ActionTypes.GET_MEMBER_SUCCESS:
            return Object.assign({}, state, {
                showLoader: false,
                list: action.payload
            });

        case ActionTypes.GET_MEMBER_ERROR:
            return Object.assign({}, state, {
                showLoader: false,
                errorCode: action.payload.code
            });

        default:
            return state;
    }
};

export default MemberListReducer;