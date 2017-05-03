import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

function RequireAuth(WrappedComponent) {
    class Auth extends Component {
        render() {
            return (
                <WrappedComponent {...this.props}/>
            );
        }
    }

    function mapStateToProps(state) {
        return {
            authenticated: state.auth.authenticated
        };
    }

    return connect(mapStateToProps)(Auth);
}

export default RequireAuth;