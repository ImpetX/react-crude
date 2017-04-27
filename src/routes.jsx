import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';

import 'styles/main';
import RequireAuth from 'modules/authentication/containers/RequireAuth';
import Login from 'modules/authentication/components/Login';
import Layout from 'modules/core/components/layout/Layout';

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={RequireAuth(Layout)} />
            <Route path='/Login' component={Login} />
            <Route path="*" component={NotFound} />
        </Router>
    );
};

export default Routes;
