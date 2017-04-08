import React, {Component} from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';


import Styles from './css/Layout.css';

export default class Layout extends Component {
    render() {
        return (
            <div className={Styles.wrapper}>
                <Sidebar />
                <div className={Styles.pagewrapper}>
                    <Navbar />
                    <div className={Styles['content-wrapper']}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    children: React.PropTypes.node
}