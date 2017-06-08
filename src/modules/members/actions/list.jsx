import ActionTypes from '../constants';

function isGetMemberAttempt() {
    return {
        type: ActionTypes.GET_MEMBER_PENDING
    }
}

function isGetMemberSuccess() {
    return {
        type: ActionTypes.GET_MEMBER_SUCCESS
    }
}

function isGetMemberError() {
    return {
        type: ActionTypes.GET_MEMBER_ERROR
    }
}

function getMemberProcess() {
    return dispatch => {
        dispatch(isGetMemberAttempt());
    }
}

export default getMemberProcess;