import {api} from '../../Utils/axios';
import * as apis from '../api';
import {USER_PROFILE_UPDATE_FAILED, USER_PROFILE_UPDATE_SUCCESS} from '../const';
import Promise from 'promise';

export function userProfileUpdate(user) {

    return dispatch => {
        return new Promise((resolve, reject) => {
            api().post(apis.ME, user)
                .then(response => {
                    dispatch(userProfileUpdateSuccess(user));
                    return resolve(user);
                }, err => {
                    dispatch(userProfileUpdateFailed(err.response.data.message));
                    return reject(err.response.data.message);
                });
        });
    };
}

export function userProfileUpdateSuccess(user) {
    return {
        type: USER_PROFILE_UPDATE_SUCCESS,
        user
    }
}

export function userProfileUpdateFailed(error) {
    return {
        type: USER_PROFILE_UPDATE_FAILED,
        error
    }
}