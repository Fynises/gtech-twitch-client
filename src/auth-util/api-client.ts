import axios, { AxiosInstance } from 'axios';

function buildClient(): AxiosInstance {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST
  });

  return api;
}

const apiClient = buildClient();

export default apiClient;
