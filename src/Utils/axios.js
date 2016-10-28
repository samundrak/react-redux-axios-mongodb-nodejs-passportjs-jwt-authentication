import axios from 'axios';
export  default function () {
    return axios.create({
        baseURL: 'https://localhost:3000/api/',
        timeout: 1000
    });
}