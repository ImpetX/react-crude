import ActionTypes from '../constants';

const defaultState = {};

const MemberReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.MEMBER_ADD_ATTEMPT:
            return Object.assign({}, state, {
                showLoader: true
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
                imageSnapshot: action.payload
            });

        case ActionTypes.IMAGE_UPLOAD_ERROR:
            return Object.assign({}, state, {
                showLoader: false,
                imageUploadErrorCode: action.payload.code
            });


        case ActionTypes.GET_METADATA_ERROR:
            return Object.assign({}, state, {
                showLoader: false,
                metadataErrorCode: action.payload.code
            });

        default:
            return state;
    }
};

export default MemberAddReducer;