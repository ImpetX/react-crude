import React from 'react';
import {Route} from 'react-router';

import MemberList from '../components/List';

const MemberRoute = () => {
    return (
        <Route path='member-list' component={MemberList} />
    );
}

export default MemberRoute;