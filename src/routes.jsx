import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Login from './modules/authentication/components/Login';

const Routes = () => (
    <BrowserRouter>
        <div>
            <Link to='/login'>Login</Link>
            <Route path='/login' component={Login} />
        </div>
    </BrowserRouter>
);

export default Routes;