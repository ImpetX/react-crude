import React, {Component} from 'react';

import UserSettings from './UserSettings';

import Styles from './css/Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className={Styles.navigbar}>
                <UserSettings />
            </div>
        );
    }
}