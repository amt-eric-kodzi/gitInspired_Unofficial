import { User } from '../models/User';
import api from '../config/axios';

export const onLogin = async (data: User) => {
  const res = await api.post('/api/auth/login', data, { withCredentials:true});
  console.log(res)

  return res;
};
export const onLogout = async () => {
  const res = await api.post('/api/auth/logout', { withCredentials:true});
  console.log(res)
  return res;
};
