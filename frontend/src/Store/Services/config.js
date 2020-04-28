import axios from 'axios';
import { store } from '../index';
import { Creators as sessionCreators } from '../Ducks/session';

export const bff = axios.create({
  baseURL: process.env.REACT_APP_API_BFF,
});

bff.interceptors.request.use(config => {
  const token = store.getState().session.sessionToken;

  if (token) config.headers.Authorization = 'Bearer ' + token;
  return config;
});

bff.interceptors.response.use(null, error => {
  if (error.response.status === 403) {
    store.dispatch(sessionCreators.clearSession());
  }

  return Promise.reject(error);
});
