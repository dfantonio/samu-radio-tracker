import { bff } from './config';

export const addRadio = payload =>
  bff().post('/register/addradio', { payload });
