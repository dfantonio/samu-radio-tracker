import { bff } from './config';

export const getStatus = () => bff().get('/status');
