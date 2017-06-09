import ActionTypes from '../constants';
import {ref} from 'Firebase/config';

function isGetMemberAttempt() {
    return {
        type: ActionTypes.GET_MEMBER_PENDING
    }
}

function isGetMemberSuccess(payload) {
    return {
        type: ActionTypes.GET_MEMBER_SUCCESS,
        payload
    }
}

function isGetMemberError(payload) {
    return {
        type: ActionTypes.GET_MEMBER_ERROR,
        payload
    }
}

function getMemberProcess() {
    return dispatch => {
        dispatch(isGetMemberAttempt());

        let membersRef = ref.child('members');

        membersRef.once('value')
            .then(dataSnapshot => {
                dispatch(isGetMemberSuccess(dataSnapshot));
            })

            .catch(error => {
                dispatch(isGetMemberError(error));
            });
    }
}

export default getMemberProcess;