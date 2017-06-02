import ActionTypes from '../constants';
import {ref, storageRef} from 'Firebase/config';

function isMemberAddAttempt() {
    return {
        type: ActionTypes.MEMBER_ADD_ATTEMPT
    }
}

function isImageUploadSuccess(payload) {
    return {
        type: ActionTypes.IMAGE_UPLOAD_SUCCESS,
        payload
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

function isMemberAddSuccess(payload) {
    return {
        type: ActionTypes.MEMBER_ADD_SUCCESS,
        payload
    }
}

function isMemberAddError(payload) {
    return {
        type: ActionTypes.MEMBER_ADD_ERROR,
        payload
    }
}

function memberAddProcess(memberData) {
    return dispatch => {
        dispatch(isMemberAddAttempt());

        let imageRef = storageRef.child('images');
        let memberImageRef = imageRef.child(`${memberData.memberImage.name}`);
        let uploadImage = memberImageRef.put(memberData.memberImage);

        uploadImage.then(snapshot => {
            dispatch(isImageUploadSuccess(snapshot));

            memberImageRef.getMetadata()
                .then(metadata => {
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
                        membershipDate: memberData.membershipDate,
                        memberImage: metadata.downloadURLs
                    })
                    .then(data => {
                        console.log('member Create Action value', data);
                        dispatch(isMemberAddSuccess(data));
                    })

                    .catch(error => {
                        dispatch(isMemberAddError(error));
                    })
                })

                .catch(error => {
                    dispatch(isMetadataError(error));
                });
        })

        .catch(error => {
            dispatch(isImageUploadError(error));
        });

    }
}

export default memberAddProcess;