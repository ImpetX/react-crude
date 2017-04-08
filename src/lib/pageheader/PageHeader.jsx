import React from 'react';

import PageHeading from './PageHeading';
import TooltipButton from '../TooltipButton';

import Styles from '../../stylesheet/common/Header.css';
import TooltipButtonTheme from '../../stylesheet/common/Theme/TooltipButton.css';

const PageHeader = (props) => {
    return (
        <div className={Styles.header}>
            <PageHeading {...props} />
            <TooltipButton icon='add' floating tooltip='Add' theme={TooltipButtonTheme}/>
        </div>
    );
};

export default PageHeader;