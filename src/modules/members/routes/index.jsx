import React from 'react';
import {Route, IndexRoute} from 'react-router';

import CommonLayout from 'modules/common/layout';
import MemberListContainer from '../containers/List';
import MemberCreateContainer from '../containers/Create';

const MemberRoute = () => {
    return (
        <Route path='members' component={CommonLayout}>
            <IndexRoute component={MemberListContainer} />
            <Route path='add' component={MemberCreateContainer} />
        </Route>
    );
}

export default MemberRoute;