import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

import '../../../node_modules/normalize.css/normalize.css';
import '../../../src/stylesheet/base/base.css';
import Styles from '../../../src/modules/core/components/layout/css/Layout.css';

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