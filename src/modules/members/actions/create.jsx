import ActionTypes from '../constants';
import {ref, storageRef} from 'Firebase/config';

function isMemberAddAttempt() {
    return {
        type: ActionTypes.MEMBER_ADD_ATTEMPT
    }
}

function validateForm(arr) {
    return {
        type: ActionTypes.DO_FORM_VALIDATION,
        keys: arr
    }
}

function isImageUploadSuccess() {
    return {
        type: ActionTypes.IMAGE_UPLOAD_SUCCESS
    }
}

function isImageUploadError(payload) {
    return {
        type: ActionTypes.IMAGE_UPLOAD_ERROR,
        payload
    }
}

function isMetadataError(payload) {
    return {
        type: ActionTypes.GET_METADATA_ERROR,
        payload
    }
}

function isMemberAddSuccess() {
    return {
        type: ActionTypes.MEMBER_ADD_SUCCESS
    }
}

function isMemberAddError(payload) {
    return {
        type: ActionTypes.MEMBER_ADD_ERROR,
        payload
    }
}

function memberAddProcess(memberData) {
    // build up the array of input labels whose correspondinf inputs are emptry
    let date = Date.now();
    let arr = [];
    let inputIsNotEmpty = true;

    for (let key in memberData) {
        if (memberData.hasOwnProperty(key)) {
            if (memberData[key] === '') {
                arr.push(key);
            }
        }
    }

    if (arr.length > 0) {
        inputIsNotEmpty = false;
    }

    return dispatch => {
        dispatch(isMemberAddAttempt());

        if (inputIsNotEmpty) {
            let imageRef = storageRef.child('images');
            let memberImageRef = imageRef.child(`${memberData.memberImage.name}`);
            let uploadImage = memberImageRef.put(memberData.memberImage);

            uploadImage.then(snapshot => {
                dispatch(isImageUploadSuccess());

                let membersRef = ref.child('members');
                let newMemberRef = membersRef.push();
                newMemberRef.set({
                    memberId: date.toString(), // Firebase database only stores strings
                    bengaliName: memberData.bengaliName,
                    englishName: memberData.englishName,
                    fatherName: memberData.fatherName,
                    motherName: memberData.motherName,
                    presentAddress: memberData.presentAddress,
                    permanentAddress: memberData.permanentAddress,
                    occupation: memberData.occupation,
                    mobileNumber: memberData.mobileNumber,
                    birthDate: memberData.birthDate.toDateString(),
                    maritalStatus: memberData.maritalStatus,
                    nationality: memberData.nationality,
                    religion: memberData.religion,
                    bloodGroup: memberData.bloodGroup,
                    referrerName: memberData.referrerName,
                    referrerContact: memberData.referrerContact,
                    certificateType: memberData.certificateType,
                    certificateNumber: memberData.certificateNumber,
                    membershipDate: memberData.membershipDate.toDateString(),
                    memberImage: snapshot.a.downloadURLs[0]
                })
                .then(() => {
                    dispatch(isMemberAddSuccess());
                })

                .catch(error => {
                    dispatch(isMemberAddError(error));
                })
            })

            .catch(error => {
                dispatch(isImageUploadError(error));
            });
        }

        else {
            dispatch(validateForm(arr));
        }
    }
}

export default memberAddProcess;