import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.MIX_API_BASE_URL,
    withCredentials: true
});

export default apiClient;
