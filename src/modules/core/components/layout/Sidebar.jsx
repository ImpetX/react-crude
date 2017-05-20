import React, {Component} from 'react';
import {Link} from 'react-router';


import Styles from './css/Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div className={Styles.sidebar}>
                <div className={Styles['logo-wrapper']}>
                    <a href='#' className={Styles['logo-link']}>
                        <img src='./src/assets/images/logo/logo.svg' alt='Logo' className={Styles.logo}/>
                    </a>
                </div>

                <div className={Styles.menus}>
                    <Link to='/member-list' activeClassName={Styles['menu-active']} className={Styles.menu}>
                        <span>Members</span>
                    </Link>
                </div>
            </div>
        );
    }
}