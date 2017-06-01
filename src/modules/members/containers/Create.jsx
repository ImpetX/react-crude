import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {memberAddProcess} from '../actions';
import MemberCreate from '../components/Create';

class MemberCreateContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <MemberCreate
                handleSubmit={this.handleSubmit}
                ref={el => this.MemberCreateComponentRef = el}
            />
        );
    }
}