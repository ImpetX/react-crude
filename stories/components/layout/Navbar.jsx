import React, {Component} from 'react';

import UserSettings from './UserSettings';

import '../../../node_modules/normalize.css/normalize.css';
import '../../../src/stylesheet/base/base.css';
import Styles from '../../../src/modules/core/components/layout/css/Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className={Styles.navigbar}>
                <UserSettings />
            </div>
        );
    }
}