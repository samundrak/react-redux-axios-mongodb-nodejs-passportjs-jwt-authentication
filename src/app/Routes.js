import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/Home';
import App from './pages/App';
import Logout from './pages/Logout';
import Me from './pages/Me';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="me" component={Me}/>
        <Route path="logout" component={Logout}/>
    </Route>
);