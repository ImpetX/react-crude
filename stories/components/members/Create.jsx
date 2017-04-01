import React, {Component} from 'react';
import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';
import DatePicker from 'react-toolbox/lib/date_picker';
import {Button, BrowseButton} from "react-toolbox/lib/button";


import PageHeading from '../ui/pageheader/PageHeading';

import '../../../node_modules/normalize.css/normalize.css';
import '../../../src/stylesheet/base/base.css';
import Styles from '../../../src/modules/members/components/css/Create.css';
import InputTheme from '../../../src/stylesheet/common/Theme/Input.css';

export default class MemberCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameBengali : '',
            nameEnglish : '',
            fatherName: '',
            motherName: '',
            presentAddress: '',
            permanentAddress: '',
            occupation: '',
            mobileNumber: '',
            maritalStatus: '',
            nationality: '',
            religion: '',
            bloodGroup:'',
            referrerName: '',
            referrerContact: '',
            dateOfBirth: '',
            certificateType: '',
            idNumber: '',
            membershipDate: ''
        };

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

    handleFileUpload(e) {
        console.log('uploaded file', e.target.files);
        return e.target.files[0];
    }

    render() {
        return (
            <div>
                <div className={Styles['header-wrapper']}>
                    <PageHeading moduleName='Members' componentName='Create'/>
                </div>

                <p className={Styles['required-notif']}>**All the fields are required.</p>

                <div>
                    <form>
                        <div>
                            <div>
                                <Input
                                    type='text'
                                    label='Name [Bengali]'
                                    theme={InputTheme}
                                    value={this.state.nameBengali}
                                    onChange={this.handleNameBengaliChange}
                                />
                            </div>

                            <div>
                                <Input
                                    type='text'
                                    label='Name [English]'
                                    theme={InputTheme}
                                    value={this.state.nameEnglish}
                                    onChange={this.handleNameEnglishChange}
                                />
                            </div>

                            <div>
                                <Input
                                    type='text'
                                    label="Father's name"
                                    theme={InputTheme}
                                    value={this.state.fatherName}
                                    onChange={this.handleFatherNameChange}
                                />
                            </div>

                            <div>
                                <Input
                                    type='text'
                                    label="Mother's name"
                                    theme={InputTheme}
                                    value={this.state.motherName}
                                    onChange={this.handleMotherNameChange}/>
                            </div>

                            <div>
                                <Input
                                    type='text'
                                    label='Present address'
                                    theme={InputTheme}
                                    value={this.state.presentAddress}
                                    onChange={this.handlePresentAddressChange}
                                    multiline
                                    rows={1}
                                    />
                            </div>

                            <div>
                                <Input
                                    type='text'
                                    label='Permanent address'
                                    theme={InputTheme}
                                    value={this.state.permanentAddress}
                                    onChange={this.handlePermanentAddressChange}
                                    multiline
                                    rows={1}
                                />
                            </div>

                            <div>
                                <Input
                                    type='text'
                                    label='Occupation'
                                    theme={InputTheme}
                                    value={this.state.occupation}
                                    onChange={this.handleOccupationChange}
                                />
                            </div>
                            <div>
                                <Input
                                    type='text'
                                    label='Mobile number'
                                    theme={InputTheme}
                                    value={this.state.mobileNumber}
                                    onChange={this.handleMobileNumberChange}
                                />
                            </div>

                            <div>
                                <Dropdown
                                    auto={false}
                                    label='Marital status'
                                    value={this.state.maritalStatus}
                                    onChange={this.handleMaritalStatusChange}
                                    source={this.getMaritalStatusSource()}
                                />
                            </div>

                            <div>
                                <Input
                                    type='text'
                                    label='Nationality'
                                    theme={InputTheme}
                                    value={this.state.nationality}
                                    onChange={this.handleNationalityChange}
                                />
                            </div>

                            <div>
                                <Input
                                    type='text'
                                    label='Religion'
                                    theme={InputTheme}
                                    value={this.state.religion}
                                    onChange={this.handleReligionChange}
                                />
                            </div>

                            <div>
                                <Dropdown
                                    auto
                                    label='Blood group'
                                    value={this.state.bloodGroup}
                                    onChange={this.handleBloodGroupChange}
                                    source={this.getBloodGroupSource()}
                                />
                            </div>

                            <div>
                                <Input
                                    type='text'
                                    label='Referrer name'
                                    theme={InputTheme}
                                    value={this.state.referrerName}
                                    onChange={this.handleReferrerNameChange}
                                />
                            </div>

                            <div>
                                <Input
                                    type='text'
                                    label='Referrer contact'
                                    theme={InputTheme}
                                    value={this.state.referrerContact}
                                    onChange={this.handleReferrerContactChange}
                                />
                            </div>

                            <div>
                                <DatePicker
                                    label='Birthdate'
                                    onChange={this.handleDateOfBirthChange}
                                    value={this.state.dateOfBirth}
                                />
                            </div>

                            <div>
                                <Dropdown
                                    auto
                                    label='Certificate type'
                                    value={this.state.certificateType}
                                    onChange={this.handleCertificateTypeChange}
                                    source={this.getCertificateTypeSource()}
                                />
                            </div>

                            <div>
                                <Input
                                    type='text'
                                    label='Certificate number'
                                    theme={InputTheme}
                                    value={this.state.idNumber}
                                    onChange={this.handleIdNumberChange}
                                />
                            </div>

                            <div>
                                <DatePicker
                                    label='Membership date'
                                    onChange={this.handleMembershipDateChange}
                                    value={this.state.membershipDate}
                                />
                            </div>

                            <div>
                                <BrowseButton
                                  icon="file_upload"
                                  label="Upload image"
                                  onChange={this.handleFileUpload}
                                  raised
                                  primary
                                />
                            </div>
                            <div>
                                <img src='' alt='' />
                            </div>

                            <div>
                                <Button
                                  icon="save"
                                  label="Save"
                                  raised
                                  primary
                                />

                                <Button
                                  icon="edit"
                                  label="Edit"
                                  raised
                                  primary
                                />

                                <Button
                                  icon="keyboard_backspace"
                                  label="Back"
                                  raised
                                  primary
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}