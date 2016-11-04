import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Login from './pages/guest/Login';
import RegisterPage from './pages/guest/Register';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="login" component={Login}/>
        <Route path="register" component={RegisterPage}/>
    </Route>
);