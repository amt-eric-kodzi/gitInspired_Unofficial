// api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.14.65:8080/',
});

export default api;
