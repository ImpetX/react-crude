import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

function RequireAuth(WrappedComponent) {
    class Auth extends Component {
        componentWillMount() {
            if (!this.props.authenticated) {
                let hasLocalStorageUser = false;

                for (let key in localStorage) {
                    if (key.startsWith("firebase:authUser:")) {
                        hasLocalStorageUser = true;
                    }
                }

                if (!hasLocalStorageUser) {
                    hashHistory.push('/login');
                }
            }
        }
        render() {
            return (
                <WrappedComponent {...this.props}/>
            );
        }
    }

    Auth.propTypes = {
        authenticated: PropTypes.bool
    };

    function mapStateToProps(state) {
        return {
            authenticated: state.auth.authenticated
        };
    }

    return connect(mapStateToProps)(Auth);
}

export default RequireAuth;