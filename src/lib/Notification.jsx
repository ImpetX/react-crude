import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'react-toolbox/lib/font_icon';

import Styles from 'styles/common/Notification';

const Notification = props => {
    return (
        <div className={Styles.notification}>
            <p className={Styles['notification-text']}>{props.notification}</p>
            <div className={Styles['notification-iconwrapper']}>
                <FontIcon value='cancel' className={Styles['notification-icon']}/>
            </div>
        </div>
    );
};

Notification.propTypes = {
    notification: PropTypes.string
}

export default Notification;