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

        let membersRef = ref.child('members');

        membersRef.orderByChild('memberId').equalTo(memberId).once('value')
            .then(snapshot => {
                dispatch(isReadMemberSuccess(snapshot.val()));
            })

            .catch(error => {
                dispatch(isReadMemberError(error));
            });
    }
}

export {
    readMemberProcess
}