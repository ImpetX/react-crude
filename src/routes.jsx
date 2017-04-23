import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';

import 'styles/main';
import Login from 'modules/authentication/components/Login';
import Layout from 'modules/core/components/layout/Layout';
import NotFound from 'modules/core/components/layout/NotFound';

const Public = () => {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={Login} />
            <Route path="*" component={NotFound}/>
        </Router>
    );
};

const Private = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/home" component={Layout} />
            <Route path="*" component={NotFound}/>
        </Router>
    );
};

export {
	Public,
	Private
};
