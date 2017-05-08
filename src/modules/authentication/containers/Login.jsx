import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {attemptToLogin} from '../actions';
import Loader from '../components/Loader';
import Login from '../components/Login';
import Error from '../components/Error';


class LoginContainerClass extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const {email, password} = this.loginRef.getInputValues();
        this.props.getValuesOnSubmit(email, password);
    }

    showLoader() {
        let shouldShowLoader = this.props.authStatus === 'pending' ? <Loader /> : null;

        return shouldShowLoader;
    }

    showErrorMessage() {
        let message;

        switch(this.props.errorCode) {
            case 'auth/user-not-found':
                message = 'Sorry! No user is found with this email address.';
                break;

            case 'auth/wrong-password':
                message = 'Password is incorrect! Please provide the correct password.';
                break;

            case 'auth/invalid-email':
                message = 'Please provide valid email address.';
                break;

            default:
                message = '';
        }

        return message;
    }

    render() {
        let message = this.showErrorMessage();

        return (
            <div>
                <Login
                    handleSubmit={this.handleSubmit}
                    ref={el => this.loginRef = el}
                />
                <Error errorMessage={message} />
                {this.showLoader()}
            </div>
        );
    }
}

LoginContainerClass.propTypes = {
    getValuesOnSubmit: PropTypes.func,
    authStatus: PropTypes.any,
    errorCode: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        authStatus: state.auth.authenticated,
        errorCode: state.auth.errorCode
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getValuesOnSubmit: (email, password) => {
            console.log('email, password', email, password);
            dispatch(attemptToLogin(email, password));
        }
    };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainerClass);

export default LoginContainer;