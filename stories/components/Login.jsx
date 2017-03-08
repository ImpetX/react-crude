import React, {Component} from 'react';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';

import Logo from './Logo';
import '../../src/stylesheet/base/base.css';
import Styles from '../../src/modules/authentication/components/css/Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className={Styles.wrapper}>
                <Logo href='#' src='./assets/images/logo/logo.svg' />
                <form onSubmit={this.props.handleSubmit}>
                    <Input type='email' label='Email' name='name' />
                    <Input type='password' label='Password' name='name' />
                    <Button type='submit' label='Log in' raised primary />
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    handleSubmit: React.PropTypes.func
}