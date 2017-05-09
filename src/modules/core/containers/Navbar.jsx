import React, {Component} from 'react';
import {connect} from 'react-redux';

import attemptToLogout from 'modules/common/actions';
import Navbar from '../components/layout/Navbar';

const mapDispatchToProps = (dispatch) => {
    return {
        onLogoutClick: (e) => {
            e.preventDefault();
            dispatch(attemptToLogout());
        }
    };
};

const NavbarContainer = connect(null, mapDispatchToProps)(Navbar);

export default NavbarContainer;