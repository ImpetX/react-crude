import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';

import 'styles/main';
import Login from 'modules/authentication/components/Login';

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={Login} />
            <Route path="*" component={NotFound}/>
        </Router>
    );
};

export default Routes;
