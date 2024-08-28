import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.188.105:8080",
    // baseURL: "http://localhost:8080",
    // baseURL: "http://127.0.0.1:8080",
    // baseURL: 'http://pizzavspizza.com/api'
    // baseURL: "https://storefront3-fqob.onrender.com/store/products",
});