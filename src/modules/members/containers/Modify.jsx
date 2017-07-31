import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {readMemberProcess} from '../actions';
import MemberModify from '../components/Modify';
import Loader from 'lib/Loader';

class MemberModifyContainerClass extends Component {
    componentWillMount() {
        this.props.readMember(this.props.params._id);
    }

    render() {
        console.log('memberModify container props ===>>>', this.props);
        console.log('memberModify container memberId ===>>>',this.props.member);
        let shouldRender = (this.props.member && this.props.params._id == this.props.member.memberId);
        return (
            shouldRender ?
                <MemberModify
                    member={this.props.member}
                />
               : <p>Loading...</p>
        );
    }
}

MemberModifyContainerClass.propTypes = {
};

const mapStateToProps = state => {
    return {
        member: state.memberModify.selectedMember
    }
};

const mapDispatchToProps = dispatch => {
    return {
        readMember: memberId => dispatch(readMemberProcess(memberId))
    }
};


const MemberModifyContainer = connect(mapStateToProps, mapDispatchToProps)(MemberModifyContainerClass);

export default MemberModifyContainer;