import React, {Component} from 'react';


import '../../../src/stylesheet/base/base.css';
import Styles from '../../../src/modules/core/components/layout/css/Layout.css';

export default class Layout extends Component {
    render() {
        console.log('Styles: ', Styles);
        return (
            <div className={Styles.wrapper}>
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
                <div className={Styles.pagewrapper}>
                    <div className={Styles.navbar}>
                        <div className={Styles['nav-userdropdown']}>
                            <p className={Styles['nav-userdetails']}>
                                <span className={Styles.username}>Admin</span>
                                <span className={Styles.icon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 35" className={Styles.caret}><path d="M20.66233 26.5137c.73877.82086 1.94216.81464 2.67534 0l6.32466-7.0274C30.4011 18.66544 30.10738 18 29.0049 18H14.9951c-1.10187 0-1.3906.67166-.65743 1.4863l6.32466 7.0274z" fill="#b3b3b3" fillRule="evenodd"/></svg>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}