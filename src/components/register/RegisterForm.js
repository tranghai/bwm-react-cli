import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BwmInput } from '../shared/form/BwmInput';
import { BwmResError } from '../shared/form/BwmResError';

const RegisterForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid, errors  } = props

    return (
        <form onSubmit={handleSubmit(submitCb)}>

            <Field
                name="username"
                component={BwmInput}
                type="text"
                label="Username"
                className="form-control"
            ></Field>
            <Field
                name="email"
                component={BwmInput}
                label="Email"
                type="email"
                className="form-control"
            ></Field>
            <Field
                name="password"
                component={BwmInput}
                label="Password"
                type="password"
                className="form-control"
            ></Field>
            <Field
                name="passwordConfirmation"
                component={BwmInput}
                label="Password Confirmation"
                type="password"
                className="form-control"
            ></Field>

            <button className="btn btn-bwm btn-form" type="submit" disabled={!valid || pristine || submitting}>Submit</button>
            <BwmResError errors={errors}></BwmResError>
        </form>
    );
}

const validate = values => {
    const errors = {};

    if (values.username && values.username.length < 4) {
        errors.username = 'Username min length is 4 characters!';
    }

    if (!values.email) {
        errors.email = 'Please enter email!';
    }

    if (!values.password) {
        errors.password = 'Please enter password!';
    }

    if (values.password !== values.passwordConfirmation) {
        errors.passwordConfirmation = 'Passwords must be the same';
    }

    return errors;
}

export default reduxForm({
    form: 'registerForm',
    validate
})(RegisterForm)