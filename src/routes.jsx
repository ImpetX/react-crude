import React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';

import 'styles/main';
import AuthRoute from 'modules/authentication/routes';
import RequireAuth from 'modules/authentication/containers/RequireAuth';
import Layout from 'modules/core/components/layout/Layout';

const Routes = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={RequireAuth(Layout)} />
            {AuthRoute()}
        </Router>
    );
};

export default Routes;
