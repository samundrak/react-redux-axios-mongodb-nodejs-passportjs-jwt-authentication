import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {registerRules} from '../../Utils/ValidationRules';
import renderField from '../common/Field';

class RegisterForm extends React.Component {

    constructor() {
        super();
    }

    render() {
        const {handleSubmit, submitting} = this.props;

        return (
            <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                <form role="form" name="register" method="post"
                      onSubmit={handleSubmit}>
                    <h2>Please Sign Up
                        <small>It's free and always will be.</small>
                    </h2>
                    <hr className="colorgraph"/>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-group">
                                <Field name="first_name" type="text"
                                       component={renderField} label="First Name"/>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-group">
                                <Field name="last_name" type="text"
                                       component={renderField} label="Last Name"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <Field name="email" type="email"
                               component={renderField} label="Email"/>
                    </div>

                    <div className="form-group">
                        <Field name="password" type="password"
                               component={renderField} label="Password"/>
                    </div>
                    <hr className="colorgraph"/>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <input type="submit" value="Register"
                                   disabled={submitting}
                                   className="btn btn-primary btn-block btn-lg"
                            />
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <Link to="/login" className="btn btn-success btn-block btn-lg">Sign In</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

// Decorate the form component
const Form = reduxForm({
    form: 'register', // a unique name for this form
    fields: ['first_name', 'last_name', 'email', 'password'],
    validate: registerRules
})(RegisterForm);

export default Form;