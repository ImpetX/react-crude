import React, {Component} from 'react';

import styles from './css/Hello';

export default class Hello extends Component {
    render() {
        return (
            <div className={styles.bg}>
                <h1 className={this.props.className}>Hello, {this.props.name}</h1>
            </div>
        );
    }
}

Hello.propTypes = {
    name: React.PropTypes.string,
    className: React.PropTypes.string
}

Hello.defaultProps = {
    className: `${styles.hello}`
}