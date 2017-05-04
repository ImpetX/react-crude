import React from 'react';
import PropTypes from 'prop-types';

import Styles from './css/Logo.css';

const Logo = ({href, src}) => {
    return (
        <a href={href} className={Styles.wrapper}>
            <img src={src} alt='logo' className={Styles.logo} />
        </a>
    );
};

Logo.propTypes = {
    href: PropTypes.string,
    src: PropTypes.string
}

export default Logo;