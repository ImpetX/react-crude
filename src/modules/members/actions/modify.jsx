import ActionTypes from '../constants';
import {ref} from 'Firebase/config';

function isReadMemberPending() {
    return {
        type: ActionTypes.READ_MEMBER_PENDING
    }
}

function isReadMemberSuccess(payload) {
    return {
        type: ActionTypes.READ_MEMBER_SUCCESS,
        payload
    }
}

function isReadMemberError(payload) {
    return {
        type: ActionTypes.READ_MEMBER_ERROR,
        payload
    }
}

function readMemberProcess(memberId) {
    return dispatch => {
        dispatch(isReadMemberPending());
    }
}

export {
    readMemberProcess
}