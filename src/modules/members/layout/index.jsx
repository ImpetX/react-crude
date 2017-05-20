import React from 'react';
import PropTypes from 'prop-types';

import Styles from 'styles/layout/mainpage.css';

const MemberLayout = ({children}) => {
    return (
        <div className={Styles['content-wrapper']}>
            {children}
        </div>
    );
};

MemberLayout.propTypes = {
    children: PropTypes.node
};

export default MemberLayout;