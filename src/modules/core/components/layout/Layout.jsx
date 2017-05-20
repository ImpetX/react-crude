import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import NavbarContainer from 'modules/core/containers/Navbar';


import Styles from './css/Layout.css';

export default class Layout extends Component {
    render() {
        return (
            <div className={Styles.wrapper}>
                <Sidebar />
                <div className={Styles.pagewrapper}>
                    <NavbarContainer />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    children: React.PropTypes.node
}