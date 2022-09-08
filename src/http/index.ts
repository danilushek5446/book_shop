import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://localhost:4000/',
  responseType: 'json',
});

$host.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
);

export default $host;
