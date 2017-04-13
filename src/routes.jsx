import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import 'styles/main';
import Login from 'modules/authentication/components/Login';

export default class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Login} />
            </Router>
        );
    }
}
