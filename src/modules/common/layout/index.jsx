import React from 'react';
import PropTypes from 'prop-types';

import Styles from 'styles/layout/mainpage.css';

const CommonLayout = ({children}) => {
    return (
        <div className={Styles['content-wrapper']}>
            {children}
        </div>
    );
};

CommonLayout.propTypes = {
    children: PropTypes.node
};

export default CommonLayout;