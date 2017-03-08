import React, {Component} from 'react';

import Styles from '../../src/modules/authentication/components/css/Logo.css';

export default class Logo extends Component {
    render() {
        return (
            <a href={this.props.href} className={Styles.wrapper}>
                <img src={this.props.src} alt='logo' className={Styles.logo} />
            </a>
        );
    }
}

Logo.propTypes = {
    href: React.PropTypes.string,
    src: React.PropTypes.string,
    className: React.PropTypes.string
}