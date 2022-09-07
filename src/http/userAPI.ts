import $host from './index';

type UserType = {
  fullName: string;
  email: string;
  dob: string;
};

type DataType = {
  user: UserType;
  token: string;
};

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
