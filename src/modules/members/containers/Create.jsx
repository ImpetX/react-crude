import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {memberAddProcess} from '../actions';
import MemberCreate from '../components/Create';

class MemberCreateContainerClass extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const memberData = this.memberCreateComponentRef.getMemberCreateObj();
        console.log('container memberData', memberData);

        this.props.getMemberCreateObjOnSubmit(memberData);
    }

    render() {
        return (
            <MemberCreate
                handleSubmit={this.handleSubmit}
                ref={el => this.memberCreateComponentRef = el}
            />
        );
    }
}

MemberCreateContainerClass.propTypes = {
    getMemberCreateObjOnSubmit: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMemberCreateObjOnSubmit: memberData => {
            dispatch(memberAddProcess(memberData));
        }
    };
};

const MemberCreateContainer = connect(null, mapDispatchToProps)(MemberCreateContainerClass);

export default MemberCreateContainer;