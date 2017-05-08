import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {attemptToLogin} from '../actions';
import Loader from '../components/Loader';
import Login from '../components/Login';


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

    render() {
        return (
            <div>
                <Login
                    handleSubmit={this.handleSubmit}
                    ref={el => this.loginRef = el}
                />

                {this.showLoader()}
            </div>
        );
    }
}

LoginContainerClass.propTypes = {
    getValuesOnSubmit: PropTypes.func,
    authStatus: PropTypes.any
};

const mapStateToProps = (state) => {
    return {
        authStatus: state.auth.authenticated
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