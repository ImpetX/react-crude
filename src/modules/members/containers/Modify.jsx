import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

import {readMemberProcess} from '../actions';
import MemberModify from '../components/Modify';
import Loader from 'lib/Loader';

class MemberModifyContainerClass extends Component {
    constructor(props) {
        super(props);

        this.updateMember = this.updateMember.bind(this);
    }
    componentWillMount() {
        this.props.readMember(this.props.params._id);
    }

    showLoader() {
        let shouldShowLoader = this.props.showLoader === true ? <Loader /> : null;

        return shouldShowLoader;
    }

    updateMember(memberId, memberObj) {
        this.props.updateMember(memberId, memberObj);

        if(!this.props.updateStatus) {
            console.warn('Member update error', this.props.errorMessage);
        }

        else {
            hashHistory.push('/members');
            console.log('===>>> Member updated successfully');
        }
    }

    render() {
        console.log('memberModify container props ===>>>', this.props);
        console.log('memberModify container memberId ===>>>',this.props.member);
        let shouldRender = (this.props.member && this.props.params._id == this.props.member.memberId);
        return (
            <div>
                {shouldRender ?
                    <MemberModify
                        member={this.props.member}
                        updateMember={this.updateMember}
                    />
               : this.showLoader()}
            </div>          
        );
    }
}

MemberModifyContainerClass.propTypes = {
    readMember: PropTypes.func,
    params: PropTypes.object,
    showLoader: PropTypes.bool,
    member: PropTypes.object,
    updateMember: PropTypes.func,
    updateStatus: PropTypes.bool,
    errorMessage: PropTypes.object
};

const mapStateToProps = state => {
    return {
        member: state.memberModify.selectedMember,
        showLoader: state.memberModify.showLoader,
        updateStatus: state.memberModify.updateStatus,
        errorMessage: state.memberModify.errorCode
    }
};

const mapDispatchToProps = dispatch => {
    return {
        readMember: memberId => dispatch(readMemberProcess(memberId)),
        updateMember: (memberId, memberObj) => dispatch(updateMember(memberId, memberObj))
    }
};


const MemberModifyContainer = connect(mapStateToProps, mapDispatchToProps)(MemberModifyContainerClass);

export default MemberModifyContainer;