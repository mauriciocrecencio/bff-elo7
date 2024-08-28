import axios from 'axios';

const baseURL = process.env.API_URL;

if (!baseURL) {
  throw new Error('API_URL is not set');
}

export const apiClient = axios.create({
  baseURL,
  timeout: 5000
});
