import axios from 'axios';

// Same environment-variable name as the source repository at commit 6d34626.
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BURL,
  headers: {
    'Accept-Language': 'en',
  },
});

export default axiosInstance;
