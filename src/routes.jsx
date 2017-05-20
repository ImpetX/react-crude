import React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';

import 'styles/main';
import AuthRoute from 'modules/authentication/routes';
import RequireAuth from 'modules/authentication/containers/RequireAuth';
import Layout from 'modules/core/components/layout/Layout';
import MemberRoute from 'modules/members/routes';

const Routes = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={RequireAuth(Layout)} >
                {MemberRoute()}
            </Route>
            {AuthRoute()}
        </Router>
    );
};

export default Routes;
