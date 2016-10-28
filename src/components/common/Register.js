import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as registerActions from '../../actions/guest/RegisterAction';
import RegisterForm from './RegisterForm';
import SocialRegister from './SocialRegister';
class Register extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    handleSubmit(values) {
        this.props.actions.createUser(values);
    }

    render() {
        const handleSubmit = this.handleSubmit.bind(this);
        return (
            <div className="row">
                <SocialRegister />
                <RegisterForm onSubmit={handleSubmit}/>
            </div>
        );
    }
}

Register.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapActionToProps(dispatch) {
    return {
        actions: bindActionCreators(registerActions, dispatch)
    };
}
export default connect(mapStateToProps, mapActionToProps)(Register);