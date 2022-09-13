import axios from 'axios';

const host = axios.create({
  baseURL: 'http://localhost:4000/',
});

host.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
);

export default host;
