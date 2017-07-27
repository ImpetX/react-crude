import React from 'react';
import {Route, IndexRoute} from 'react-router';

import CommonLayout from 'modules/common/layout';
import MemberListContainer from '../containers/List';
import MemberCreateContainer from '../containers/Create';
import MemberModifyContainer from '../containers/Modify';

const MemberRoute = () => {
    return (
        <Route path='members' component={CommonLayout}>
            <IndexRoute component={MemberListContainer} />
            <Route path='add' component={MemberCreateContainer} />
            <Route path=':_id' component={MemberModifyContainer} />
        </Route>
    );
}

export default MemberRoute;