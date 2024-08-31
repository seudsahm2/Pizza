import axios from "axios";

const client = axios.create({
    baseURL: "http://192.168.188.105:8080",
    headers: {
        'Content-Type': 'application/json',
    }
});

// Adding a request interceptor to ensure a trailing slash
client.interceptors.request.use((config) => {
    if (!config.url.endsWith('/')) {
        config.url += '/';
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default client;
