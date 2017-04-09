import React from 'react';
import PropTypes from 'prop-types';

import Styles from '../../../../src/stylesheet/common/Header.css';

const PageHeading = ({moduleName, componentName}) => {
    return (
        <h1 className={Styles.heading}>{moduleName}<span className={Styles.slash}>/</span> <span className={Styles.subheading}>{componentName}</span></h1>
    );
};

PageHeading.propTypes = {
    moduleName: React.PropTypes.string,
    componentName: React.PropTypes.string
}

export default PageHeading;