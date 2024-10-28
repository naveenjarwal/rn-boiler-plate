// src/services/apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Set base URL for your API
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    // Optional: add authorization tokens or other request headers here
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
