import axios from "axios";

const apiClient = axios.create({
    // TODO Envで持つ
    baseURL: "http://127.0.0.1:8000",
    withCredentials: true
});

export default apiClient;
