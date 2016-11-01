import React, {PropTypes} from 'react';
import LoginForm from '../../components/common/LoginForm';
import {reduxForm} from 'redux-form';
import {guest} from '../../Utils/axios';
import Promise from 'promise';
import {formRules} from '../../Utils/ValidationRules';
import {loginSuccess, loginFailed} from  '../../actions/guest/LoginAction';
import toast from '../../Utils/Toast';
const $http = guest();


const loginUser = (user, dispatch)=> {
    return new Promise((resolve, reject) => {
        $http.post('login', Object.assign({}, user, {
            username: user.email
        }))
            .then(response => {
                if (response.status != 200) {
                    dispatch(loginFailed(response.data));
                    return reject(response);
                }

                toast('You have been logged in.');
                dispatch(loginSuccess({user, token: response.data.token}));

                return resolve();
            }, (err)=> {
                dispatch(loginFailed(err.response.data.message));
                return reject();
            });
    });
};

export default reduxForm({
    form: 'LoginForm',
    fields: ['email', 'password'],
    validate: formRules,
    onSubmit: loginUser,
    // initialValues :
})(LoginForm);