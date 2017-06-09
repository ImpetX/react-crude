import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getMemberProcess} from '../actions';
import MemberList from '../components/List';
import Loader from 'lib/Loader';

class MemberListContainerClass extends Component {
    componentWillMount() {
        this.props.getMemberProcess();
    }
    render() {
        return (
            <div>
                <MemberList
                    data={this.props.members}
                />
            </div>
        );
    }
}

MemberListContainerClass.propTypes = {
    members: PropTypes.any,
    getMemberProcess: PropTypes.any
};

const mapStateToProps = state => {
    console.log('MemberList mapStateToProps', state);
    return {
        members: state.members.list
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({
        getMemberProcess: getMemberProcess
    }, dispatch);
}


const MemberListContainer = connect(mapStateToProps, matchDispatchToProps)(MemberListContainerClass);

export default MemberListContainer;