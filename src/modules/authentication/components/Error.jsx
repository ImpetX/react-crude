import React from 'react';
import PropTypes from 'prop-types';

import Styles from './css/Error';

const Error = ({errorMessage}) => {
    return <p className={Styles.error}>{errorMessage}</p>
};

Error.propTypes = {
    errorMessage: PropTypes.string
};

export default Error;