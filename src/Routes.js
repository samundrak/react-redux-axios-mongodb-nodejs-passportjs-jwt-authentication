import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/home/HomePage';
import Login from './pages/guest/Login';
import RegisterPage from './pages/guest/Register';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="login" component={Login}/>
        <Route path="register" component={RegisterPage}/>
    </Route>
);