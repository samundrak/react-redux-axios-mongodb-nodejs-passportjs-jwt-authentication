import React, {PropTypes}from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import LoginForm from '../../containers/guest/LoginFormContainer';
import * as loginActions from  '../../actions/guest/LoginAction';
import Error from '../../components/common/Error';
import {bindActionCreators} from 'redux';


class Login extends React.Component {


    componentWillUnmount() {
        this.props.actions.resetFields();
    }

    renderError(errors) {
        if (errors.length) {
            return (
                <Error messages={errors}/>
            );
        }
    }

    render() {
        const {login :{errors}} = this.props;
        return (
            <div >
                {this.renderError(errors)}
                <div className="omb_login">
                    <h3 className="omb_authTitle">Login or <Link to="/register" activeClassName="active">Sign up</Link>
                    </h3>


                    <div className="row omb_row-sm-offset-3 omb_loginOr">
                        <div className="col-xs-12 col-sm-6">
                            <hr className="omb_hrOr"/>
                            <span className="omb_spanOr">or</span>
                        </div>
                    </div>
                    <LoginForm initialValues={this.props.login.user}/>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    actions: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired
};
const mapStateToProps = state => {
    return {
        login: state.login
    };
};

const mapActionsToProps = dispatch => {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
};
export default  connect(mapStateToProps, mapActionsToProps)(Login);
