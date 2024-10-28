// src/features/auth/api.js
import apiClient from '../../services/apiService';

export const loginAPI = async (credentials) => {
  return await apiClient.post('/auth/login', credentials);
};
