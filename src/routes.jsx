import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Home from './modules/home/Home';
import Hello from './modules/hello/Hello';
import Kamal from './modules/persons/Kamal';
import Jamal from './modules/persons/Jamal';

export default class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Home} >
                    <Route path='/kamal' component={Kamal} />
                    <Route path='/jamal' component={Jamal} />
                </Route>
            </Router>
        );
    }
}