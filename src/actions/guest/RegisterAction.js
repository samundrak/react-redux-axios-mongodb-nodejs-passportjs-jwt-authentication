import {CREATE_USER, CREATE_USER_FAILED, CREATE_USER_SUCCESS} from '../const';
import axios from 'axios';

export function createUser(user) {
    console.log('i am here for a reason');
    const payload = axios({
        url: 'http://localhost:3000/register',
        method: 'post',
        data: user
    });
    
    return {
        type: CREATE_USER,
        user,
        payload
    };
}

export function registerSuccess(user) {
    return {
        type: CREATE_USER_SUCCESS,
        user
    };
}

export function registerError(error) {
    return {
        type: CREATE_USER_FAILED
    };
}