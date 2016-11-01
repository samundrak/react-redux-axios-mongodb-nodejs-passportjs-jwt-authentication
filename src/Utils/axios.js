import axios from 'axios';
export  default  function api() {
    return axios.create({
        baseURL: 'http://localhost:3000/api/',
        timeout: 1000
    });
}

export function guest() {
    return axios.create({
        baseURL: 'http://localhost:3000/',
        timeout: 1000
    });
}


