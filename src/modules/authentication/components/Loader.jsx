import React from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import Styles from './css/Loader';

const Loader = () => {
    return (
        <div className={Styles.loader}>
            <ProgressBar type='circular' mode='indeterminate' multicolor />
        </div>
    );
}

export default Loader;