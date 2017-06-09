import ActionTypes from '../constants';
import {database} from 'Firebase/config';

function isGetMemberAttempt() {
    return {
        type: ActionTypes.GET_MEMBER_PENDING
    }
}

function isGetMemberSuccess(payload) {

    return {
        type: ActionTypes.GET_MEMBER_SUCCESS,
        payload: payload
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

        let membersRef = database.ref('members');

        membersRef.once('value')
            .then(dataSnapshot => {
                dispatch(isGetMemberSuccess(dataSnapshot.val()));
            })

            .catch(error => {
                dispatch(isGetMemberError(error));
            });
    }
}

export default getMemberProcess;