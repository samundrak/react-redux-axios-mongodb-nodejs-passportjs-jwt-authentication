import {api} from '../../Utils/axios';
import toast from '../../Utils/Toast';
import Promise from 'promise';
import * as apis from '../api';
import {FETCH_USER_SUCCESS, LOGIN_PATH, APP_PATH} from '../const';

export function auth(token) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            if (!token) {
                return reject();
            }

            api().get(apis.ME)
                .then(response => {
                    return resolve(response.data);
                }, () => {
                    return reject();
                });
        });
    };
}

export function unauthorized() {
    toast('Your are not authorized.', 'error');
    window.location.href = LOGIN_PATH;
}

export function redirectToApp() {
    window.location.href = APP_PATH;
}

export function fetchUserDetailsSuccess(user) {
    return {
        type: FETCH_USER_SUCCESS,
        user
    }
}

