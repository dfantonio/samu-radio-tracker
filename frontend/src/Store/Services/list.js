import { bff } from './config';

export const getStatus = () => bff().get('/status');
export const getEmprestimos = params => bff().get('/emprestimos', { params });
export const getRadios = params => bff().get('/radios', { params });
export const getBaterias = params => bff().get('/baterias', { params });
export const getLocais = () => bff().get('/locais');
export const getProfissoes = () => bff().get('/profissoes');
