import { bff } from './config';

export const addRadio = payload => bff().post('/radios', payload);
export const addBattery = payload => bff().post('/baterias', payload);
export const addLocal = payload => bff().post('/locais', payload);
