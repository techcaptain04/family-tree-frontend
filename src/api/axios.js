import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.20.1.22:5174',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

export default api;
