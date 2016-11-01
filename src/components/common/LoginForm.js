import React from 'react';
import  {Field} from 'redux-form';
import renderField from '../common/Field';

class LoginForm extends React.Component {

    render() {
        const {handleSubmit, submitting} = this.props;
        return (
            <div className="row omb_row-sm-offset-3">
                <div className="col-xs-12 col-sm-6">
                    <form crole="form" name="login" method="post"
                          onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <Field name="email" type="text"
                                   component={renderField} label="Email"/>
                        </div>
                        <div className="form-group">
                            <Field name="password" type="password"
                                   component={renderField} label="Password"/>
                        </div>
                        <br/>
                        <input type="submit" value="Login"
                               disabled={submitting}
                               className="btn btn-primary btn-block btn-lg"
                        />
                    </form>
                </div>
            </div>
        );
    }

}
export default LoginForm;