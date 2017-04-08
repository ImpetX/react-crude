import React, {Component} from 'react';


import Styles from './css/Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div className={Styles.sidebar}>
                <div className={Styles['logo-wrapper']}>
                    <a href='#' className={Styles['logo-link']}>
                        <img src='../../assets/images/logo/logo.svg' alt='Logo' className={Styles.logo}/>
                    </a>
                </div>

                <div className={Styles.menus}>
                    <a href='#' className={Styles.menu}>
                        <span>Members</span>
                    </a>
                </div>
            </div>
        );
    }
}