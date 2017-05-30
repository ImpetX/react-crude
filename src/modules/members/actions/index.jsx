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

        newMemberRef.set({
            bengaliName: memberData.bengaliName,
            englishName: memberData.englishName,
            fatherName: memberData.fatherName,
            motherName: memberData.motherName,
            presentAddress: memberData.presentAddress,
            permanentAddress: memberData.permanentAddress,
            occupation: memberData.occupation,
            mobileNumber: memberData.mobileNumber,
            birthDate: memberData.birthDate,
            maritalStatus: memberData.maritalStatus,
            nationality: memberData.nationality,
            religion: memberData.religion,
            bloodGroup: memberData.bloodGroup,
            referrerName: memberData.referrerName,
            referrerContact: memberData.referrerContact,
            certificateType: memberData.certificateType,
            certificateNumber: memberData.certificateNumber,
            membershipDate: memberData.membershipDate
        })

    }
}

