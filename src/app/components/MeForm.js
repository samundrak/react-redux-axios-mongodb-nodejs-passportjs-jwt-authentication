import React from 'react';
import {Field} from 'redux-form';
import renderField from '../../components/common/Field';

class MeForm extends React.Component {

    constructor() {
        super();
    }

    render() {
        const {handleSubmit, submitting} = this.props;
        return (
            <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                <form role="form" name="register" method="post"
                      onSubmit={handleSubmit}>
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
                        <Field name="email" type="email" disabled="disabled"
                               component={renderField} label="Email"/>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <input type="submit" value="Update"
                                   disabled={submitting}
                                   className="btn btn-primary btn-block btn-lg"
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default MeForm;