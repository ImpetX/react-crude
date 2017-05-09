import React, {Component} from 'react';
import PropTypes from 'prop-types';

import UserSettings from './UserSettings';

import Styles from './css/Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className={Styles.navigbar}>
                <UserSettings onLogoutClick={this.props.onLogoutClick}/>
            </div>
        );
    }
}

Navbar.propTypes = {
    onLogoutClick: PropTypes.func
};