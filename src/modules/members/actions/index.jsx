import ActionTypes from '../constants';
import {ref, storageRef} from 'Firebase/config';

function isMemberAddAttempt() {
    return {
        type: ActionTypes.MEMBER_ADD_ATTEMPT
    }
}

function isMemberAddSuccess(memberData) {
    return {
        type: ActionTypes.MEMBER_ADD_SUCCESS,
        memberData
    }
}

function isMemberAddError() {
    return {
        type: ActionTypes.MEMBER_ADD_ERROR
    }
}

function memberAddProcess(memberData) {
    return dispatch => {
        dispatch(isMemberAddAttempt());

        let membersRef = ref.child('members');
        let newMemberRef = membersRef.push();

    }
}

