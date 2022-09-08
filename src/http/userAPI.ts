import $host from './index';

type RequestType = {
  email: string;
  password: string;
};

export const login = async (request: RequestType) => {
  const data = await $host.post('api/auth/login', request);
  // eslint-disable-next-line no-console
  console.log(data.data.user);
  localStorage.setItem('token', data.data.token);
  return data.data.user;
};

export const registration = async (request: RequestType) => {
  const data = await $host.post('api/auth/registration', request);
  // eslint-disable-next-line no-console
  console.log(data.data.user);
  localStorage.setItem('token', data.data.token);
  return data.data.user;
};

export const checkAuth = async () => {
  const data = await $host.get('api/auth/');
  // eslint-disable-next-line no-console
  console.log(data);
  // localStorage.setItem('token', data.data.token);
  return data.data.user;
};
