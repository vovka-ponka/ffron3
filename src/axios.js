import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ffback-from-travel.onrender.com',
  // baseURL: 'http://localhost:4444/',
});

export default instance;
