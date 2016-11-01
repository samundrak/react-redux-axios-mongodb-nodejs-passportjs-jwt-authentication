import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RegisterFormContainer from '../../containers/guest/RegisterFormContainer';
import Error from '../../components/common/Error';
import * as registerActions from  '../../actions/guest/RegisterAction';
import * as loginActions from  '../../actions/guest/LoginAction';
import toast from '../../Utils/Toast';

class Register extends React.Component {

    renderError(errors) {
        if (errors.length) {
            return (
                <Error messages={errors}></Error>
            );
        }
    }

    componentWillReceiveProps(nextProps) {
        let user = nextProps.register.user;
        if (nextProps.register.status && user._id) {
            toast('You have been register successfully, Please Login.');
            this.props.loginActions.userCanLogIn({
                email: user.email,
                password: user.password
            });
            this.context.router.push('/login');
        }
    }

    render() {
        const {register :{errors}} = this.props;
        return (
            <div>
                <div className="row">
                    {this.renderError(errors)}
                    <RegisterFormContainer />
                </div>
            </div>
        );
    }
}

Register.contextTypes = {
    router: PropTypes.object.isRequired
};
const mapStateToProps = state => {
    return {
        register: state.register
    }
};

const mapActionsToProps = dispatch => {
    return {
        actions: bindActionCreators(registerActions, dispatch),
        loginActions: bindActionCreators(loginActions, dispatch)
    };
};
export default  connect(mapStateToProps, mapActionsToProps)(Register);