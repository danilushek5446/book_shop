import axios from 'axios';

const host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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
