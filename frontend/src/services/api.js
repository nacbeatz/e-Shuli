// /home/ubuntu/e_learning_platform/frontend/src/services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';


const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add JWT token to requests if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Or however you store your token
    if (token) {
      config.headers['x-auth-token'] = token; // Or 'Authorization': `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;

