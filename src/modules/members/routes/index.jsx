import React from 'react';
import {Route, IndexRoute} from 'react-router';

import MemberLayout from '../layout';
import MemberList from '../components/List';
import MemberCreate from '../components/Create';

const MemberRoute = () => {
    return (
        <Route path='members' component={MemberLayout}>
            <IndexRoute component={MemberList} />
            <Route path='add' component={MemberCreate} />
        </Route>
    );
}

export default MemberRoute;