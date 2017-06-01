import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';

import Logo from './Logo';

import Styles from './css/Login';
import InputTheme from 'styles/common/Theme/Input';
import ButtonTheme from './css/Theme/Button';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        };
        this.handleEmailChange = this.handleChange.bind(this, 'email');
        this.handlePasswordChange = this.handleChange.bind(this, 'password');
    }

    handleChange(name, value) {
        this.setState(
            {
                [name]: value
            }
        );
    }

    getInputValues() {
        let valuesObj = {
            email: this.state.email,
            password: this.state.password
        };

        return valuesObj;
    }

    render() {
        return (
            <div className={Styles.wrapper}>
                <Logo href='#' src='./src/assets/images/logo/logo.svg' />
                <form onSubmit={this.props.handleSubmit}>
                    <div className={Styles.inputs}>
                        <Input
                            type='email'
                            label='Email'
                            theme={InputTheme}
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />

                        <Input
                            type='password'
                            label='Password'
                            theme={InputTheme}
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                    </div>

                    <Button
                        type='submit'
                        label='Log in'
                        raised theme={ButtonTheme}
                    />
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    handleSubmit: PropTypes.func,
    errorMessage: PropTypes.string
}