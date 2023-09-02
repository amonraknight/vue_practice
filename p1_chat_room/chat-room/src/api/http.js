import axios from 'axios';

var instance = axios.create({
    headers: {
    'Content-Type': 'application/json'
    },
    timeout: 5000,
    baseURL: 'http://127.0.0.1:8080',
    withCredentials: false
})

export default instance

