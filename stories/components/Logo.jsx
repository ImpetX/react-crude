import React, {Component} from 'react';

import Styles from '../../src/modules/authentication/components/css/Logo.css';

const Logo = ({href, src}) => {
    return (
        <a href={href} className={Styles.wrapper}>
            <img src={src} alt='logo' className={Styles.logo} />
        </a>
    );
};

Logo.propTypes = {
    href: React.PropTypes.string,
    src: React.PropTypes.string
}

export default Logo;