import ActionTypes from '../constants';
import {convertObjToArray, getFirstArrayElement} from 'modules/common/utils';

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
                selectedMember: getFirstArrayElement(convertObjToArray(action.payload))
            });

        case ActionTypes.READ_MEMBER_ERROR:
            return Object.assign({}, state, {
                showLoader: false,
                errorCode: action.payload
            });

        case ActionTypes.UPDATE_MEMBER_PENDING:
            return Object.assign({}, state, {
                showLoader: true,
                updateStatus: false
            });

        case ActionTypes.UPDATE_MEMBER_SUCCESS:
            return Object.assign({}, state, {
                showLoader: false,
                updateStatus: true
            });

        case ActionTypes.UPDATE_MEMBER_ERROR:
            return Object.assign({}, state, {
                showLoader: false,
                updateStatus: false,
                errorCode: action.payload
            });

        case ActionTypes.DELETE_MEMBER_PENDING:
            return Object.assign({}, state, {
                showLoader: true
            });

        case ActionTypes.DELETE_MEMBER_SUCCESS:
            return Object.assign({}, state, {
                showLoader: false
            });

        case ActionTypes.DELETE_MEMBER_ERROR:
            return Object.assign({}, state, {
                showLoader: false,
                errorCode: action.payload.code
            });

        default:
            return state;
    }
};

export default MemberModifyReducer;