import api from './axios';

export const loginRequest = (credentials) =>
  api.post('/auth/login', credentials);

export const registerRequest = (data) => api.post('/auth/register', data);
