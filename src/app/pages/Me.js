import React, {PropTypes} from 'react';
import MeForm from '../containers/MeFormContainer';
import {connect} from 'react-redux';


class Me extends React.Component {

    render() {
        return (
            <div>
                <MeForm initialValues={this.props.me}></MeForm>
            </div>
        );
    }
}

Me.propTypes = {
    me: PropTypes.object.isRequired
};
const mapStateToProps = state => {
    return {
        me: state.app.user
    };
};

const mapActionsToProps = dispatch => {
    return {
        
    };
};
export default  connect(mapStateToProps, mapActionsToProps)(Me);
