import ActionTypes from '../constants';

const defaultState = {};

const MemberCreateReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.MEMBER_ADD_ATTEMPT:
            return Object.assign({}, state, {
                showLoader: true
            });

        case ActionTypes.DO_FORM_VALIDATION:
            return Object.assign({}, state, {
                showLoader: false,
                emptyInput: action.keys
            });

        case ActionTypes.MEMBER_ADD_SUCCESS:
            return Object.assign({}, state, {
                showLoader: false
            });

        case ActionTypes.MEMBER_ADD_ERROR:
            return Object.assign({}, state, {
                showLoader: false,
                memberAddErrorCode: action.payload.code
            });

        case ActionTypes.IMAGE_UPLOAD_SUCCESS:
            return Object.assign({}, state, {
                showLoader: false,
                fieldReset: true
            });

        case ActionTypes.IMAGE_UPLOAD_ERROR:
            return Object.assign({}, state, {
                showLoader: false,
                imageUploadErrorCode: action.payload.code
            });

        default:
            return state;
    }
};

export default MemberCreateReducer;