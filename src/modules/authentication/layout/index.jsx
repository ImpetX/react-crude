import React from 'react';
import PropTypes from 'prop-types';

const AuthLayout = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

AuthLayout.propTypes = {
    children: PropTypes.element
};

export default AuthLayout;