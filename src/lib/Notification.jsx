import React from 'react';
import PropTypes from 'prop-types';

import Styles from 'styles/common/Notification';

const Notification = props => {
    return (
        <div className={Styles.notification}>
            <p>{props.notification}</p>
        </div>
    );
};

Notification.propTypes = {
    notification: PropTypes.string
}

export default Notification;