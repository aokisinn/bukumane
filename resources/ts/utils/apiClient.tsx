import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.MIX_API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }
});

export default apiClient;
