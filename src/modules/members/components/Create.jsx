import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {hashHistory} from 'react-router';
import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';
import DatePicker from 'react-toolbox/lib/date_picker';
import {Button, BrowseButton} from "react-toolbox/lib/button";

import initialState from '../constants/initialState';
import PageHeading from '../../../lib/pageheader/PageHeading';


import Styles from './css/Create.css';
import InputTheme from '../../../stylesheet/common/Theme/Input.css';
import DatepickerTheme from '../../../stylesheet/common/Theme/Datepicker.css';
import UploadButtonTheme from '../../../stylesheet/common/Theme/Button/Upload.css';
import SaveButtonTheme from '../../../stylesheet/common/Theme/Button/Save.css';
import CancelButtonTheme from '../../../stylesheet/common/Theme/Button/Cancel.css';
import BackButtonTheme from '../../../stylesheet/common/Theme/Button/Back.css';

export default class MemberCreate extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.handleNameBengaliChange = this.handleChange.bind(this, 'nameBengali');
        this.handleNameEnglishChange = this.handleChange.bind(this, 'nameEnglish');
        this.handleFatherNameChange = this.handleChange.bind(this, 'fatherName');
        this.handleMotherNameChange = this.handleChange.bind(this, 'motherName');
        this.handlePresentAddressChange = this.handleChange.bind(this, 'presentAddress');
        this.handlePermanentAddressChange = this.handleChange.bind(this, 'permanentAddress');
        this.handleOccupationChange = this.handleChange.bind(this, 'occupation');
        this.handleMobileNumberChange = this.handleChange.bind(this, 'mobileNumber');
        this.handleMaritalStatusChange = this.handleChange.bind(this, 'maritalStatus');
        this.handleNationalityChange = this.handleChange.bind(this, 'nationality');
        this.handleReligionChange = this.handleChange.bind(this, 'religion');
        this.handleBloodGroupChange = this.handleChange.bind(this, 'bloodGroup');
        this.handleReferrerNameChange = this.handleChange.bind(this, 'referrerName');
        this.handleReferrerContactChange = this.handleChange.bind(this, 'referrerContact');
        this.handleDateOfBirthChange = this.handleChange.bind(this, 'dateOfBirth');
        this.handleCertificateTypeChange = this.handleChange.bind(this, 'certificateType');
        this.handleIdNumberChange = this.handleChange.bind(this, 'idNumber');
        this.handleMembershipDateChange = this.handleChange.bind(this, 'membershipDate');
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.goToListPage = this.goToListPage.bind(this);
        this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
    }

    getMaritalStatusSource() {
        const source = [
            {
                label: 'Married',
                value: 'married'
            },

            {
                label: 'Single',
                value: 'single'
            },

            {
                label: 'Divorced',
                value: 'divorced'
            },

            {
                label: 'Widow',
                value: 'widow'
            }
        ];

        return source;
    }

    getBloodGroupSource() {
        const source = [
            {
                label: 'A+',
                value: 'a+'
            },

            {
                label: 'A-',
                value: 'a-'
            },

            {
                label: 'B+',
                value: 'b+'
            },

            {
                label: 'B-',
                value: 'b-'
            },

            {
                label: 'AB+',
                value: 'ab+'
            },

            {
                label: 'AB-',
                value: 'ab-'
            },

            {
                label: 'O+',
                value: 'o+'
            },

            {
                label: 'O-',
                value: 'o-'
            }
        ];

        return source;
    }

    getCertificateTypeSource() {
        const source = [
            {
                label: 'NID',
                value: 'nid'
            },

            {
                label: 'Birth Certificate',
                value: 'birthCertificate'
            }
        ];

        return source;
    }

    handleChange(name, value) {
        this.setState(
            {
                [name]: value
            }
        );
    }

    getMemberCreateObj() {
        let valuesObj = {
            bengaliName: this.state.nameBengali,
            englishName: this.state.nameEnglish,
            fatherName: this.state.fatherName,
            motherName: this.state.motherName,
            presentAddress: this.state.presentAddress,
            permanentAddress: this.state.permanentAddress,
            occupation: this.state.occupation,
            mobileNumber: this.state.mobileNumber,
            birthDate: this.state.dateOfBirth,
            maritalStatus: this.state.maritalStatus,
            nationality: this.state.nationality,
            religion: this.state.religion,
            bloodGroup: this.state.bloodGroup,
            referrerName: this.state.referrerName,
            referrerContact: this.state.referrerContact,
            certificateType: this.state.certificateType,
            certificateNumber: this.state.idNumber,
            membershipDate: this.state.membershipDate,
            memberImage: this.state.memberImageMetadata
        };

        return valuesObj;
    }

    handleFileUpload(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onload = () => {
            this.setState(
                {
                    memberImageMetadata: file,
                    memberImage: reader.result
                }
            );
        }

        reader.readAsDataURL(file);
    }

    goToListPage(e) {
        e.preventDefault();
        hashHistory.push('/members');
    }

    handleCancelButtonClick(e) {
        e.preventDefault();

        this.setState(
            initialState
        );
    }

    render() {
        let {memberImageMetadata} = this.state;

        return (
            <div>
                <div className={Styles['header-wrapper']}>
                    <PageHeading moduleName='Members' componentName='Create'/>
                </div>

                <p className={Styles['required-notif']}>**All the fields are required.</p>

                <div>
                    <form onSubmit={this.props.handleSubmit}>
                        <div className={Styles.inputs}>
                            <div className={Styles.names}>
                                <Input
                                    type='text'
                                    label='Name [Bengali]'
                                    theme={InputTheme}
                                    value={this.state.nameBengali}
                                    onChange={this.handleNameBengaliChange}
                                    required={true}
                                />
                            </div>

                            <div className={Styles.names}>
                                <Input
                                    type='text'
                                    label='Name [English]'
                                    theme={InputTheme}
                                    value={this.state.nameEnglish}
                                    onChange={this.handleNameEnglishChange}
                                    required={true}
                                />
                            </div>
                        </div>

                        <div className={Styles.inputs}>
                            <div className={Styles.names}>
                                <Input
                                    type='text'
                                    label="Father's name"
                                    theme={InputTheme}
                                    value={this.state.fatherName}
                                    onChange={this.handleFatherNameChange}
                                    required={true}
                                />
                            </div>

                            <div className={Styles.names}>
                                <Input
                                    type='text'
                                    label="Mother's name"
                                    theme={InputTheme}
                                    value={this.state.motherName}
                                    onChange={this.handleMotherNameChange}
                                    required={true}
                                />

                            </div>
                        </div>

                        <div className={Styles.inputs}>
                            <div className={Styles.address}>
                                <Input
                                    type='text'
                                    label='Present address'
                                    theme={InputTheme}
                                    value={this.state.presentAddress}
                                    onChange={this.handlePresentAddressChange}
                                    multiline
                                    rows={1}
                                    required={true}
                                    />
                            </div>

                            <div className={Styles.address}>
                                <Input
                                    type='text'
                                    label='Permanent address'
                                    theme={InputTheme}
                                    value={this.state.permanentAddress}
                                    onChange={this.handlePermanentAddressChange}
                                    multiline
                                    rows={1}
                                    required={true}
                                />
                            </div>
                        </div>

                        <div className={Styles.inputs}>
                            <div className={Styles.onethird}>
                                <Input
                                    type='text'
                                    label='Occupation'
                                    theme={InputTheme}
                                    value={this.state.occupation}
                                    onChange={this.handleOccupationChange}
                                    required={true}
                                />
                            </div>
                            <div className={Styles.onethird}>
                                <Input
                                    type='text'
                                    label='Mobile number'
                                    theme={InputTheme}
                                    value={this.state.mobileNumber}
                                    onChange={this.handleMobileNumberChange}
                                    required={true}
                                />
                            </div>

                            <div className={Styles.onethird}>
                                <DatePicker
                                    label='Birthdate'
                                    onChange={this.handleDateOfBirthChange}
                                    value={this.state.dateOfBirth}
                                    theme={DatepickerTheme}
                                    required={true}
                                />
                            </div>

                            <div className={Styles.onethird}>
                                <Dropdown
                                    auto={false}
                                    label='Marital status'
                                    value={this.state.maritalStatus}
                                    onChange={this.handleMaritalStatusChange}
                                    source={this.getMaritalStatusSource()}
                                    required={true}
                                />
                            </div>

                            <div className={Styles.onethird}>
                                <Input
                                    type='text'
                                    label='Nationality'
                                    theme={InputTheme}
                                    value={this.state.nationality}
                                    onChange={this.handleNationalityChange}
                                    required={true}
                                />
                            </div>

                            <div className={Styles.onethird}>
                                <Input
                                    type='text'
                                    label='Religion'
                                    theme={InputTheme}
                                    value={this.state.religion}
                                    onChange={this.handleReligionChange}
                                    required={true}
                                />
                            </div>

                            <div className={Styles.onethird}>
                                <Dropdown
                                    auto={false}
                                    label='Blood group'
                                    value={this.state.bloodGroup}
                                    onChange={this.handleBloodGroupChange}
                                    source={this.getBloodGroupSource()}
                                    required={true}
                                />
                            </div>
                        </div>

                        <div className={Styles.inputs}>
                            <div className={Styles.names}>
                                <Input
                                    type='text'
                                    label='Referrer name'
                                    theme={InputTheme}
                                    value={this.state.referrerName}
                                    onChange={this.handleReferrerNameChange}
                                    required={true}
                                />
                            </div>

                            <div className={Styles.names}>
                                <Input
                                    type='text'
                                    label='Referrer contact'
                                    theme={InputTheme}
                                    value={this.state.referrerContact}
                                    onChange={this.handleReferrerContactChange}
                                    required={true}
                                />
                            </div>
                        </div>

                        <div className={Styles.inputs}>
                            <div className={Styles.onethird}>
                                <Dropdown
                                    auto
                                    label='Certificate type'
                                    value={this.state.certificateType}
                                    onChange={this.handleCertificateTypeChange}
                                    source={this.getCertificateTypeSource()}
                                    required={true}
                                />
                            </div>

                            <div className={Styles.onethird}>
                                <Input
                                    type='text'
                                    label='Certificate number'
                                    theme={InputTheme}
                                    value={this.state.idNumber}
                                    onChange={this.handleIdNumberChange}
                                    required={true}
                                />
                            </div>

                            <div className={Styles.onethird}>
                                <DatePicker
                                    label='Membership date'
                                    onChange={this.handleMembershipDateChange}
                                    value={this.state.membershipDate}
                                    theme={DatepickerTheme}
                                    required={true}
                                />
                            </div>
                        </div>

                        <div className={Styles.inputs}>
                            <div className={Styles.filepreview}>
                                <img src={this.state.memberImage} alt='' className={Styles.profileimg}/>
                            </div>

                            <div className={Styles.fileupload}>
                                <BrowseButton
                                  icon="file_upload"
                                  label="Upload image"
                                  onChange={this.handleFileUpload}
                                  raised
                                  theme={UploadButtonTheme}
                                />
                            </div>
                        </div>

                        <div className={Styles.inputs}>
                            <div className={Styles.actionbtn}>
                                <Button
                                  icon="save"
                                  label="Save"
                                  type='submit'
                                  raised
                                  theme={SaveButtonTheme}
                                />
                            </div>

                            <div className={Styles.actionbtn}>
                                <Button
                                  icon="cancel"
                                  label="Cancel"
                                  raised
                                  theme={CancelButtonTheme}
                                  onClick={this.handleCancelButtonClick}
                                />
                            </div>

                            <div className={Styles.actionbtn}>
                                <Button
                                  icon="keyboard_backspace"
                                  label="Back"
                                  raised
                                  theme={BackButtonTheme}
                                  onClick={this.goToListPage}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

MemberCreate.propTypes = {
    handleSubmit: PropTypes.func
}