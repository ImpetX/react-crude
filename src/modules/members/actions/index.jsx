import ActionTypes from '../constants';
import {ref, storageRef} from 'Firebase/config';

function isMemberAddAttempt() {
    return {
        type: ActionTypes.MEMBER_ADD_ATTEMPT
    }
}

function isImageUploadSuccess(snapshot) {
    return {
        type: ActionTypes.IMAGE_UPLOAD_SUCCESS,
        snapshot
    }
}

function isImageUploadError(error) {
    return {
        type: ActionTypes.IMAGE_UPLOAD_ERROR,
        error
    }
}

function isMetadataError(error) {
    return {
        type: ActionTypes.GET_METADATA_ERROR,
        error
    }
}

function isMemberAddSuccess(data) {
    return {
        type: ActionTypes.MEMBER_ADD_SUCCESS,
        data
    }
}

function isMemberAddError(error) {
    return {
        type: ActionTypes.MEMBER_ADD_ERROR,
        error
    }
}

function memberAddProcess(memberData, imageFile) {
    return dispatch => {
        dispatch(isMemberAddAttempt());

        let imageRef = storageRef.child('images');
        let memberImageRef = imageRef.child(`${imageFile}`);
        let uploadImage = memberImageRef.put(imageFile);

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