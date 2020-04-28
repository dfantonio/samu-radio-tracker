import { bff } from './config';

export const addRadio = payload => bff.post('/radios', payload);
export const addBattery = payload => bff.post('/baterias', payload);
export const addLocal = payload => bff.post('/locais', payload);
export const addProfissao = payload => bff.post('/profissoes', payload);
export const addEmprestimo = payload => bff.post('/emprestimos', payload);
export const finishEmprestimo = payload => bff.put('/emprestimos', payload);
