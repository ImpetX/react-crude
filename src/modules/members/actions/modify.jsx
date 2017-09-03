import ActionTypes from '../constants';
import {database, ref} from 'Firebase/config';

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

function isUpdateMemberPending() {
    return {
        type: ActionTypes.UPDATE_MEMBER_PENDING
    }
}

function isUpdateMemberSuccess() {
    return {
        type: ActionTypes.UPDATE_MEMBER_SUCCESS
    }
}

function isUpdateMemberError(payload) {
    return {
        type: ActionTypes.UPDATE_MEMBER_ERROR,
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

function updateMemberProcess(memberId, objOfUpdatedProps) {
    return dispatch => {
        dispatch(isUpdateMemberPending());

        let membersRef = ref.child('members');

        membersRef.orderByChild('memberId').equalTo(memberId).once('value')
        .then(snapshot => {
            let targetNode =  Object.keys(snapshot.val())[0];

            database.ref(`/members/${targetNode}`).update(objOfUpdatedProps)
            .then(() => {
                dispatch(isUpdateMemberSuccess());
            })

            .catch(error => {
                dispatch(isUpdateMemberError(error));
            });
        })

        .catch(error => {
            dispatch(isUpdateMemberError(error));
        });
    }
}

export {
    readMemberProcess,
    updateMemberProcess
}