import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {memberAddProcess} from '../actions';
import MemberCreate from '../components/Create';
import Loader from 'lib/Loader';

class MemberCreateContainerClass extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let formValidationResult = this.memberCreateComponentRef.handleFormValidation();

        if (formValidationResult !== 'no error') {

        }
        else {
            const memberData = this.memberCreateComponentRef.getMemberCreateObj();
            console.log('container memberData', memberData);
            this.props.getMemberCreateObjOnSubmit(memberData);
        }
    }

    showLoader() {
        let shouldShowLoader = this.props.showLoader === true ? <Loader /> : null;

        return shouldShowLoader;
    }

    render() {
        return (
            <div>
                <MemberCreate
                    handleSubmit={this.handleSubmit}
                    ref={el => this.memberCreateComponentRef = el}
                />
                {this.showLoader()}
            </div>
        );
    }
}

MemberCreateContainerClass.propTypes = {
    getMemberCreateObjOnSubmit: PropTypes.func,
    showLoader: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        showLoader: state.addMember.showLoader
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