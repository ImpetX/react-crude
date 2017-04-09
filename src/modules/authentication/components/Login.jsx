import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';

import Logo from './Logo';

import Styles from './css/Login.css';
import InputTheme from '../../../stylesheet/common/Theme/Input.css';
import ButtonTheme from './css/Theme/Button.css';


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
    render() {
        return (
            <div className={Styles.wrapper}>
                <Logo href='#' src='./assets/images/logo/logo.svg' />
                <form onSubmit={this.props.handleSubmit}>
                    <div className={Styles.inputs}>
                        <Input type='email' label='Email' theme={InputTheme} value={this.state.email} onChange={this.handleEmailChange}/>
                        <Input type='password' label='Password' theme={InputTheme} value={this.state.password} onChange={this.handlePasswordChange} />
                    </div>
                    <Button type='submit' label='Log in' raised theme={ButtonTheme}/>
                </form>

            </div>
        );
    }
}

Login.propTypes = {
    handleSubmit: React.PropTypes.func
}