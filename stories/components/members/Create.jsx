import React, {Component} from 'react';

import PageHeading from '../ui/pageheader/PageHeading';

import '../../../node_modules/normalize.css/normalize.css';
import '../../../src/stylesheet/base/base.css';
import Styles from '../../../src/modules/members/components/css/Create.css';

export default class MemberCreate extends Component {
    render() {
        return (
            <div>
                <div className={Styles['header-wrapper']}>
                    <PageHeading moduleName='Members' componentName='Create'/>
                </div>

                <p className={Styles['required-notif']}>**All the fields are required.</p>
            </div>
        );
    }
}