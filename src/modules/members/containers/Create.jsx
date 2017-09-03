import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {memberAddProcess} from '../actions';
import MemberCreate from '../components/Create';
import Loader from 'lib/Loader';
import Notification from 'lib/Notification';
import initialState from '../constants/initialState';

class MemberCreateContainerClass extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            showNotification: true
        }

        this.hideNotification = this.hideNotification.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const memberData = this.memberCreateComponentRef.getMemberCreateObj();

        this.props.getMemberCreateObjOnSubmit(memberData);
    }

    hideNotification() {
        this.setState(
            (prevState, props) => {
                return {
                    showNotification: !prevState.showNotification
                }
            }
        );
    }

    showLoader() {
        let shouldShowLoader = this.props.showLoader === true ? <Loader /> : null;

        return shouldShowLoader;
    }

    handleFormValidation() {
        let errorMessages = [];

        if(this.props.emptyInput !== undefined) {
            this.props.emptyInput.map(el => {
                switch(el) {
                    case 'birthDate':
                        errorMessages.push('Birthdate');
                        break;

                    case 'maritalStatus':
                        errorMessages.push('Marital status');
                        break;

                    case 'bloodGroup':
                        errorMessages.push('Blood group');
                        break;

                    case 'certificateType':
                        errorMessages.push('Certificate type');
                        break;

                    case 'membershipDate':
                        errorMessages.push('Membership date');
                        break;

                    case 'memberImage':
                        errorMessages.push('Photo of the member');
                        break;

                    default:
                        errorMessages;
                }
            });
        }

        return errorMessages;
    }

    showFormValidationNotification() {
        let formValidationErrorArray = this.handleFormValidation();
        let defaultText = 'Please provide ';
        let displayNotification =  null;
        let flag = true;

        if(this.state.showNotification === false) {
            flag = false;
        }

        if (formValidationErrorArray.length > 0) {
            if(flag) {
                displayNotification = <Notification
                                        notification={defaultText + formValidationErrorArray.join(', ')}
                                        onCancelClick={this.hideNotification}
                                    />
            }
        }

        return displayNotification;
    }

    componentDidUpdate() {
        if(this.props.fieldReset !== undefined) {
            this.memberCreateComponentRef.setState(
                initialState
            )
        }
    }

    render() {
        return (
            <div>
                <MemberCreate
                    handleSubmit={this.handleSubmit}
                    ref={el => this.memberCreateComponentRef = el}
                />
                {this.showLoader()}
                {this.showFormValidationNotification()}
            </div>
        );
    }
}

MemberCreateContainerClass.propTypes = {
    getMemberCreateObjOnSubmit: PropTypes.func,
    showLoader: PropTypes.bool,
    emptyInput: PropTypes.any,
    fieldReset: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        showLoader: state.addMember.showLoader,
        emptyInput: state.addMember.emptyInput,
        fieldReset: state.addMember.fieldReset
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMemberCreateObjOnSubmit: memberData => {
            dispatch(memberAddProcess(memberData));
        }
    };
};

const MemberCreateContainer = connect(mapStateToProps, mapDispatchToProps)(MemberCreateContainerClass);

export default MemberCreateContainer;