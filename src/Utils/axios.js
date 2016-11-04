/*
 global Savetodrive
 */
import axios from 'axios';
export  function api() {
    return axios.create({
        baseURL: 'http://localhost:3000/api/',
        timeout: 5000,
        headers: {
            'Authorization': 'JWT ' + Savetodrive.getToken()
        }
    });
}

export function guest() {
    return axios.create({
        baseURL: 'http://localhost:3000/',
        timeout: 1000
    });
}


