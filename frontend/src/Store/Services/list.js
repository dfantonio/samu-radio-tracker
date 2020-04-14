import { bff } from './config';

export const getStatus = () => bff().get('/status');
export const getEmprestimos = params => bff().get('/emprestimos', { params });
export const getRadios = () => bff().get('/radios');
export const getBaterias = () => bff().get('/baterias');
export const getLocais = () => bff().get('/locais');
export const getProfissoes = () => bff().get('/profissoes');
