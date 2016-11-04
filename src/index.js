import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import routes from './Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import '../node_modules/pace-progress/themes/blue/pace-theme-barber-shop.css';
import ReduxToastr from 'react-redux-toastr'
import subscriber from './subscriber/guest.js';
import {auth, redirectToApp} from './app/actions/index';
import {getToken} from './Utils/Token';

window.Savetodrive = {};
window.Savetodrive.getToken = getToken;
const store = configureStore();
store.dispatch(auth(Savetodrive.getToken()))
    .then(() => {
        store.dispatch(redirectToApp());
    },() => {
        subscriber(store);
        render(
            <Provider store={store}>
                <div>
                    <Router history={hashHistory} routes={routes}/>
                    <ReduxToastr
                        timeOut={4000}
                        newestOnTop={false}
                        position="top-right"/>
                </div>
            </Provider>,
            document.getElementById('app')
        );
    });

