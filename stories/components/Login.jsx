import React, {Component} from 'react';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';

import Logo from './Logo';
import '../../src/stylesheet/base/base.css';
import Styles from '../../src/modules/authentication/components/css/Login.css';
import InputTheme from '../../src/modules/authentication/components/css/Theme/Input.css';
import ButtonTheme from '../../src/modules/authentication/components/css/Theme/Button.css';


export default class Login extends Component {
    render() {
        return (
            <div className={Styles.wrapper}>
                <Logo href='#' src='./assets/images/logo/logo.svg' />
                    <form onSubmit={this.props.handleSubmit}>
                    <div className={Styles.inputs}>
                        <Input type='email' label='Email' theme={InputTheme} />
                        <Input type='password' label='Password' theme={InputTheme} />
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