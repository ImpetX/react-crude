import {connect} from 'react-redux';
import {attemptToLogin} from '../actions';
import Login from '../components/Login';

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (e) => {
            e.preventDefault();
            let email = e.target.children[0].value;
            let password = e.target.children[1].value;
            dispatch(attemptToLogin(email, password));
        }
    };
};

const LoginContainer = connect(null, mapDispatchToProps)(Login);

export default LoginContainer;