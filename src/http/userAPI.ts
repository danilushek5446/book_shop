import type { UserType } from '../store/user/UserSlice';
import $host from './index';

type RequestType = {
  email: string;
  password: string;
};

type ChangeInfoType = {
  email: string;
  fullName?: string;
};

export const login = async (request: RequestType): Promise<UserType> => {
  const data = await $host.post('api/auth/login', request);
  localStorage.setItem('token', data.data.token);
  return data.data.user;
};

export const registration = async (request: RequestType): Promise<UserType> => {
  const data = await $host.post('api/auth/registration', request);

  localStorage.setItem('token', data.data.token);
  return data.data.user;
};

export const checkAuth = async (): Promise<UserType> => {
  const data = await $host.get('api/auth/');

  // localStorage.setItem('token', data.data.token);
  return data.data.user;
};

export const changeInfo = async (request: ChangeInfoType): Promise<UserType> => {
  const data = await $host.patch('api/user/', request);
  // localStorage.setItem('token', data.data.token);
  return data.data.user;
};
