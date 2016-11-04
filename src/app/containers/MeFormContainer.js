import React, {PropTypes} from 'react';
import MeForm from '../components/MeForm';
import {formRules} from '../../Utils/ValidationRules';
import {reduxForm} from 'redux-form';
import {userProfileUpdate} from '../actions/MeActions';
import toast from '../../Utils/Toast';

const updateUser = function (user, dispatch) {

    dispatch(userProfileUpdate(user))
        .then(() => {
            toast('Profile has been updated.');
        }, err => {
            toast(err, 'error');
        });
};

// Decorate the form component
export default reduxForm({
    form: 'MeForm', // a unique name for this form
    fields: ['first_name', 'last_name'],
    validate: formRules,
    onSubmit: updateUser
})(MeForm);

