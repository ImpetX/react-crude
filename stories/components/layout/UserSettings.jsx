import React, {Component} from 'react';
import onClickOutside from 'react-onclickoutside';

import '../../../node_modules/normalize.css/normalize.css';
import '../../../src/stylesheet/base/base.css';
import Styles from '../../../src/modules/core/components/layout/css/UserSettings.css';

class UserSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownShow: false
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState(
            {
                dropdownShow: !this.state.dropdownShow
            }
        )
    }

    getDropdownClassName() {
        const toggleDropdownClass = this.state.dropdownShow? Styles['dropdown-show'] : null;

        return [Styles.dropdown, toggleDropdownClass].join(' ');
    }

    handleClickOutside(e) {
        this.setState(
            {
                dropdownShow: false
            }
        );
    }

    render() {
        return (
            <div className={Styles['nav-userdropdown']} onClick={this.toggleDropdown}>
                <p>
                    <span className={Styles.username}>Admin</span>
                    <span className={Styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 45" className={Styles.caret}><path d="M20.66233 26.5137c.73877.82086 1.94216.81464 2.67534 0l6.32466-7.0274C30.4011 18.66544 30.10738 18 29.0049 18H14.9951c-1.10187 0-1.3906.67166-.65743 1.4863l6.32466 7.0274z" fill="#ccc" fillRule="evenodd"/></svg>
                    </span>
                </p>

                <div className={this.getDropdownClassName()}>
                    <span className={Styles.arrow}></span>
                    <a href='#' className={Styles['dropdown-menu']}>
                        <span>Profile</span>
                    </a>
                    <a href='#' className={Styles['dropdown-menu']}>
                        <span>Settings</span>
                    </a>
                    <a href='#' className={Styles['dropdown-menu']}>
                        <span>Logout</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default onClickOutside(UserSettings);