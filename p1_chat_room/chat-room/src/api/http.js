import axios from 'axios';

var instance = axios.create({
    headers: {
        
    },
    timeout: 60000,
    baseURL: 'http://127.0.0.1:8001',
    withCredentials: false
})

export default instance

