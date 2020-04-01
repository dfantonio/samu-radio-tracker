import Axios from 'axios';

export function bff() {
  return Axios.create({
    baseURL: process.env.REACT_APP_API_BFF
  });
}
