// Core
import React, { Component } from 'react';
import { func, bool } from 'prop-types';
import { Form, Errors, Control } from 'react-redux-form';

// Instruments
import Styles from './styles';
import { validateEmail, validateLength } from 'instruments/validators';
import cx from 'classnames';

// Components
import Input from 'components/Input';

export default class LoginForm extends Component {
    constructor () {
        super ();

        this.handleSubmit = ::this._handleSubmit;
    }

    _handleSubmit () {
        console.log('In Loginform - handleSubmit ');
    }

    render () {

        const { authFetching } = this.props;

        const buttonStyle = cx(Styles.signupSubmit, {
            [Styles.disabledButton]: authFetching
        });

        return (
            <Form className = { Styles.form } model = 'forms.login' onSubmit = { this.handleSubmit }>
                <Errors
                    messages = {{ valid: 'Email should have valid format'}}
                    model = 'forms.login.email'
                    show = { ({ submitFailed, touched, errors }) =>
                        submitFailed || touched && errors.valid }
                />
                <Input
                    placeholder = 'Email'
                    disabled = { authFetching }
                    errors = {{ valid: (email)=>!validateEmail(email)}}
                    id = 'login.email'
                    model = 'forms.login.email'  type = 'email'
                />
                <Errors
                    messages = {{ valid: 'Password should have at least 4 symbol length'}}
                    model = 'forms.login.password'
                    show = { ({ submitFailed, touched, errors }) =>
                        submitFailed || touched && errors.valid }
                />
                <Input
                    placeholder = 'Password'
                    disabled = { authFetching }
                    errors = {{ valid: (password)=>!validateLength(password, 4)}}
                    id = 'login.password'
                    model = 'forms.login.password'
                    type = 'password'
                />
                <button
                    className = { buttonStyle }
                    disabled = { authFetching }
                    type = 'submit'>
                    {authFetching ? 'Working...' : 'Login'}
                </button>
            </Form>
        );
    }
}
