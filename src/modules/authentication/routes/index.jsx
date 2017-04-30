import React from 'react';
import {Route, IndexRoute} from 'react-router';

import AuthLayout from '../layout';
import LoginContainer from '../containers/Login';

const AuthRoute = () => {
    return (
        <Route path='login' component={AuthLayout}>
            <IndexRoute component={LoginContainer} />
        </Route>
    );
}

export default AuthRoute;