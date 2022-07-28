import axios from "axios";

axios.defaults.baseURL = '/api'

axios.interceptors.response.use(
    res => res.data,
    err => Promise.reject(err)
)
