import ActionTypes from '../constants';
import {ref, storageRef} from 'Firebase/config';

function isMemberAddAttempt() {
    return {
        type: ActionTypes.MEMBER_ADD_ATTEMPT
    }
}

function isMemberAddSuccess() {
    return {
        type: ActionTypes.MEMBER_ADD_SUCCESS
    }
}

function isMemberAddError() {
    return {
        type: ActionTypes.MEMBER_ADD_ERROR
    }
}

