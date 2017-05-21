import React from 'react';
import {Route, IndexRoute} from 'react-router';

import CommonLayout from 'modules/common/layout';
import MemberList from '../components/List';
import MemberCreate from '../components/Create';

const MemberRoute = () => {
    return (
        <Route path='members' component={CommonLayout}>
            <IndexRoute component={MemberList} />
            <Route path='add' component={MemberCreate} />
        </Route>
    );
}

export default MemberRoute;