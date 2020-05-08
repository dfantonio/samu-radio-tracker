import { bff } from './config';

export const login = payload => bff.post('/user/login', payload);
export const cadastro = payload => bff.post('/user/register', payload);
