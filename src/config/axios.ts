// api.ts
import axios from 'axios';

console.log(import.meta.env.VITE_SERVER_URL)

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export default api;
