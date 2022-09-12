import type { AuthType, UserType, ChangeInfoType, ChangePasswordType } from '../types/types';
import $host from './index';

export const login = async (request: AuthType): Promise<UserType> => {
  const data = await $host.post('api/auth/login', request);

  localStorage.setItem('token', data.data.token);
  return data.data.user;
};

export const registration = async (request: AuthType): Promise<UserType> => {
  const data = await $host.post('api/auth/registration', request);

  localStorage.setItem('token', data.data.token);
  return data.data.user;
};

export const checkAuth = async (): Promise<UserType> => {
  const data = await $host.get('api/auth/');

  return data.data.user;
};

export const changeInfo = async (request: ChangeInfoType): Promise<UserType> => {
  const data = await $host.patch('api/user/', request);

  return data.data.user;
};

export const changePassword = async (request: ChangePasswordType): Promise<UserType> => {
  const data = await $host.patch('api/user/change-password', request);

  return data.data.user;
};
