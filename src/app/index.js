import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import appStore from './stores/appStore';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import 'pace-progress/themes/blue/pace-theme-barber-shop.css';
import ReduxToastr from 'react-redux-toastr';
import {getToken} from '../Utils/Token';
import * as Action from './actions/index';


(function () {
    window.Savetodrive = {};
    window.Savetodrive.getToken = getToken;
    const store = appStore();

    store.dispatch(Action.auth(Savetodrive.getToken()))
        .then(user => {
            store.dispatch(Action.fetchUserDetailsSuccess(user));
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
        }, () => {
            store.dispatch(Action.unauthorized());
        });
}());
