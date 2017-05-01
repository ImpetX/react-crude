import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {attemptToLogin} from '../actions';
import Login from '../components/Login';


class LoginContainerClass extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const getEmailValue = this.loginRef.getInputValues().email;
        const getPasswordValue = this.loginRef.getInputValues().password;

        this.props.getValuesOnSubmit(getEmailValue, getPasswordValue);
    }

    render() {
        return (
            <Login
                ref={el => this.loginRef = el}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

LoginContainerClass.propTypes = {
    getValuesOnSubmit: React.PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        getValuesOnSubmit: (getEmailValue, getPasswordValue) => {
            console.log('email, password', getEmailValue, getPasswordValue);
            dispatch(attemptToLogin(getEmailValue, getPasswordValue));
        }
    };
};

const LoginContainer = connect(null, mapDispatchToProps)(LoginContainerClass);

export default LoginContainer;