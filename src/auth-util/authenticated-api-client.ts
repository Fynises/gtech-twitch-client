import localStorageHelper from '@/util/local-storage-helper';
import axios, { AxiosInstance } from 'axios';

function buildClient(): AxiosInstance {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST
  });

  const jwt = localStorageHelper((ls) => ls.getItem('jwt'));
  api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
  return api;
}

const authApi = buildClient();

export default authApi;
