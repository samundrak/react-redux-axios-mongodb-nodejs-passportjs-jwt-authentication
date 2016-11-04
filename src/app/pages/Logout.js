import React from 'react';
import toast from '../../Utils/Toast';
import {LOGIN_PATH} from '../const';
export default class Logout extends React.Component {

    componentWillMount() {
        toast('You have been logged out');
        setTimeout(()=> {
            window.localStorage.removeItem('token');
            window.location.href = LOGIN_PATH;
        }, 2000);
    }

    render() {
        return (
            <div className="alert alert-danger">
                Logging out...
            </div>
        );
    }
}