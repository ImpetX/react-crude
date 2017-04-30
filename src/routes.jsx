import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';

import 'styles/main';
import AuthRoute from 'modules/authentication/routes';
import RequireAuth from 'modules/authentication/containers/RequireAuth';
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
