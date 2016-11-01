import React, {PropTypes} from 'react';
import RegisterForm from '../../components/common/RegisterForm';
import {formRules} from '../../Utils/ValidationRules';
import {reduxForm} from 'redux-form';
import {registerError, registerSuccess} from  '../../actions/guest/RegisterAction';
import {guest} from '../../Utils/axios';
import Promise from 'promise';
const $http = guest();

const createUser = function (user, dispatch) {
    const payload = $http.post('register', user);
    return new Promise((resolve, reject)=> {
        payload.then(request => {
            if (request.status != 200) {
                dispatch(registerError(request));
                return reject();
            }


            dispatch(registerSuccess(Object.assign({}, user, request.data)));
            return resolve();
        }, err => {
            dispatch(registerError(err.response.data.message));
            return reject();
        });
    });

};

// Decorate the form component
export default reduxForm({
    form: 'RegisterForm', // a unique name for this form
    fields: ['first_name', 'last_name', 'email', 'password'],
    validate: formRules,
    onSubmit: createUser
})(RegisterForm);

