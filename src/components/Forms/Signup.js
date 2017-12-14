// Core
import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { Form, Errors } from 'react-redux-form';
import cx from 'classnames';

// Instruments
import Styles from './styles';
import { validateEmail, validateLength } from 'instruments/validators';

// Components
import Input from 'components/Input';

export default class SignupForm extends Component {
    static propTypes = {
        authFetching: bool.isRequired,
        signup:       func.isRequired
    };

    constructor () {
        super();

        this.handleSubmit = ::this._handleSubmit;
    }

    _handleSubmit (user) {

        console.log('In Forms/Signup/_handleSubmit');
        console.log('this.props = ', this.props);
        this.props.signup(user);
    }

    render () {


        const { authFetching } = this.props;

        const disabledInputStyle = cx({
            [Styles.disabledInput]: authFetching
        });

        const buttonStyle = cx(Styles.signupSubmit, {
            [Styles.disabledButton]: authFetching
        });

        return (

            <Form
                className = { Styles.form }
                model = 'forms.signup'
                onSubmit = { this.handleSubmit }>
                <Errors
                    messages = { {
                        valid:
                            'Your username should be at least 1 symbol long'
                    } }
                    model = 'forms.signup.username'
                    show = { ({ submitFailed, touched, errors }) =>
                        submitFailed || touched && errors.valid }
                />
                <Input
                    disabled = { authFetching }
                    disabledstyle = { disabledInputStyle }
                    errors = { {
                        valid: (username) => validateLength(username, 1)
                    } }
                    errorstyle = { Styles.error }
                    id = 'forms.signup.username'
                    model = 'forms.signup.username'
                    placeholder = 'Username'
                    type = 'text'
                />
                <Errors
                    messages = { {
                        valid: 'Please provide a valid email'
                    } }
                    model = 'forms.signup.email'
                    show = { ({ submitFailed, touched, errors }) =>
                        submitFailed || touched && errors.valid }
                />
                <Input
                    disabled = { authFetching }
                    disabledstyle = { disabledInputStyle }
                    errors = { {
                        valid: (email) => !validateEmail(email)
                    } }
                    errorstyle = { Styles.error }
                    id = 'forms.signup.email'
                    model = 'forms.signup.email'
                    placeholder = 'Email'
                    type = 'text'
                />
                <Errors
                    messages = { {
                        valid: `A password should be at least 4 symbols long`
                    } }
                    model = 'forms.signup.password'
                    show = { ({ submitFailed, touched, errors }) =>
                        submitFailed || touched && errors.valid }
                />
                <Input
                    disabled = { authFetching }
                    disabledstyle = { disabledInputStyle }
                    errors = { {
                        valid: (password) => validateLength(password, 4)
                    } }
                    errorstyle = { Styles.error }
                    id = 'forms.signup.password'
                    model = 'forms.signup.password'
                    placeholder = 'Password'
                    type = 'password'
                />
                <Errors
                    messages = { {
                        valid: `Password and password confirmation do not match`
                    } }
                    model = 'forms.signup.password'
                    show = { ({ submitFailed, touched, errors }) =>
                        submitFailed || touched && errors.valid }
                />
                <Input
                    disabled = { authFetching }
                    disabledstyle = { disabledInputStyle }
                    errors = { {
                        valid: (passwordConfirm) => validateLength(passwordConfirm, 4)
                    } }
                    errorstyle = { Styles.error }
                    id = 'forms.signup.passwordConfirm'
                    model = 'forms.signup.passwordConfirm'
                    placeholder = 'Password Confirm'
                    type = 'password'
                />
                <button
                    className = { buttonStyle }
                    disabled = { authFetching }
                    type = 'submit'>
                    {authFetching ? 'Working...' : 'Create Account'}
                </button>
            </Form>
        );
    }
}
