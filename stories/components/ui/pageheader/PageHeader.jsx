import React from 'react';

import PageHeading from './PageHeading';
import TooltipButton from '../TooltipButton';

import Styles from '../../../../src/stylesheet/common/Header.css';
import TooltipButtonTheme from '../../../../src/stylesheet/common/Theme/TooltipButton.css';

const PageHeader = ({moduleName, componentName}) => {
    return (
        <div className={Styles.header}>
            <PageHeading moduleName={moduleName} componentName={componentName} />
            <TooltipButton icon='add' floating tooltip='Add' theme={TooltipButtonTheme}/>
        </div>
    );
};

PageHeader.propTypes = {
    moduleName: React.PropTypes.string,
    componentName: React.PropTypes.string
}

export default PageHeader;