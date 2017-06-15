import ActionTypes from '../constants';

const defaultState = {};

const MemberModifyReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.READ_MEMBER_PENDING:
            return Object.assign({}, state, {
                showLoader: true
            });

        case ActionTypes.READ_MEMBER_SUCCESS:
            return Object.assign({}, state, {
                showLoader: false,
                selectedMember: action.payload
            });

        case ActionTypes.READ_MEMBER_ERROR:
            return Object.assign({}, state, {
                showLoader: false,
                errorCode: action.payload
            });

        default:
            return state;
    }
};

export default MemberModifyReducer;