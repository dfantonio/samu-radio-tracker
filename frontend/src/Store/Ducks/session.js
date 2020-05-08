import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addSessionErrors: ['errors'],
  startLogin: ['params'],
  successLogin: ['data'],
  errorLogin: ['errors'],
  startCadastro: ['params'],
  successCadastro: ['data'],
  errorCadastro: ['errors'],
  clearSession: [],
});

/* Initial State */
const initialState = {
  sessionToken: '',
  nome: '',
  hasErrors: false,
  errors: {
    email: '',
    senha: '',
    message: '',
  },
};

/* Reducer */
function successLogin(state, { data }) {
  const { sessionToken, nome } = data;

  return {
    ...state,
    sessionToken,
    nome,
  };
}

function requestErrorsHandler(state, { errors }) {
  return {
    ...state,
    errors: {
      ...state.errors,
      ...errors,
    },
  };
}

function addSessionErrors(state, { errors }) {
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

function clearSession(state) {
  return {
    ...state,
    sessionToken: '',
    nome: '',
  };
}

export const session = {
  [Types.ADD_SESSION_ERRORS]: addSessionErrors,
  [Types.SUCCESS_LOGIN]: successLogin,
  [Types.ERROR_LOGIN]: requestErrorsHandler,
  [Types.CLEAR_SESSION]: clearSession,
  [Types.ERROR_CADASTRO]: requestErrorsHandler,
};

export default createReducer(initialState, session);
