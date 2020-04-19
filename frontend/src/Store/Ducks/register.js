import { createReducer, createActions } from 'reduxsauce';

/* Action Creators start */
export const { Types, Creators } = createActions({
  addRegisterErrors: ['errors'],
  clearSuccess: [],
  startAddRadio: ['data'],
  SuccessAddRadio: [],
  ErrorAddRadio: ['errors'],
  startAddBattery: ['data'],
  SuccessAddBattery: [],
  ErrorAddBattery: ['errors'],
  startAddLocal: ['data'],
  SuccessAddLocal: [],
  ErrorAddLocal: ['errors'],
  startAddProfissao: ['data'],
  SuccessAddProfissao: [],
  ErrorAddProfissao: ['errors'],
  startAddEmprestimo: ['data'],
  SuccessAddEmprestimo: [],
  ErrorAddEmprestimo: ['errors'],
  startFinishEmprestimo: ['data'],
  SuccessFinishEmprestimo: [],
  ErrorFinishEmprestimo: ['errors'],
});

const initialState = {
  hasErrors: false,
  hasSuccess: false,
  errors: {
    serialNumber: '',
    sigla: '',
    nome: '',
    issi: '',
    patrimonio: '',
    local_id: '',
    profissao_id: '',
    bem_id: '',
  },
};

/* Reducers */
function clearSuccess(state) {
  return { ...state, hasSuccess: false };
}

function addRegisterErrors(state, { errors }) {
  const newErrors = {
    ...state.errors,
    ...errors,
  };
  const hasErrors = Object.values(newErrors).some(e => !!e);

  return {
    ...state,
    hasErrors,
    errors: newErrors,
  };
}

//TODO: Reduzir todo esse caminhão de funções em uma só
function SuccessAddRadio(state) {
  return { ...state, hasSuccess: true, hasErrors: false };
}

function ErrorAddRadio(state, { errors }) {
  return { ...state, hasErrors: true, errors: { ...state.errors, ...errors } };
}

function SuccessAddBattery(state) {
  return { ...state, hasSuccess: true, hasErrors: false };
}

function ErrorAddBattery(state, { errors }) {
  return { ...state, hasErrors: true, errors: { ...state.errors, ...errors } };
}

function SuccessAddLocal(state) {
  return { ...state, hasSuccess: true, hasErrors: false };
}

function ErrorAddLocal(state, { errors }) {
  return { ...state, hasErrors: true, errors: { ...state.errors, ...errors } };
}

function SuccessAddProfissao(state) {
  return { ...state, hasSuccess: true, hasErrors: false };
}

function ErrorAddProfissao(state, { errors }) {
  return { ...state, hasErrors: true, errors: { ...state.errors, ...errors } };
}

function ErrorAddEmprestimo(state, { errors }) {
  return { ...state, hasErrors: true, errors: { ...state.errors, ...errors } };
}

function ErrorFinishEmprestimo(state, { errors }) {
  return { ...state, hasErrors: true, errors: { ...state.errors, ...errors } };
}

export const user = {
  [Types.ADD_REGISTER_ERRORS]: addRegisterErrors,
  [Types.CLEAR_SUCCESS]: clearSuccess,
  [Types.SUCCESS_ADD_RADIO]: SuccessAddRadio,
  [Types.ERROR_ADD_RADIO]: ErrorAddRadio,
  [Types.SUCCESS_ADD_BATTERY]: SuccessAddBattery,
  [Types.ERROR_ADD_BATTERY]: ErrorAddBattery,
  [Types.SUCCESS_ADD_LOCAL]: SuccessAddLocal,
  [Types.ERROR_ADD_LOCAL]: ErrorAddLocal,
  [Types.SUCCESS_ADD_PROFISSAO]: SuccessAddProfissao,
  [Types.ERROR_ADD_PROFISSAO]: ErrorAddProfissao,
  [Types.ERROR_ADD_EMPRESTIMO]: ErrorAddEmprestimo,
  [Types.ERROR_FINISH_EMPRESTIMO]: ErrorFinishEmprestimo,
};

export default createReducer(initialState, user);
