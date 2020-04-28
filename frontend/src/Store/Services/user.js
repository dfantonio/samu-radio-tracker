import { bff } from './config';

export const login = payload => bff.post('/user/login', payload);
export const register = payload => bff.post('/user/register', payload);
