import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {readMemberProcess} from '../actions';
import MemberModify from '../components/Modify';
import Loader from 'lib/Loader';

class MemberModifyContainerClass extends Component {
    render() {
        return (
            <div>
                <MemberModify />
                {this.showLoader()}
            </div>
        );
    }
}

MemberModifyContainerClass.propTypes = {
};


const MemberModifyContainer = connect(null, null)(MemberModifyContainerClass);

export default MemberModifyContainer;