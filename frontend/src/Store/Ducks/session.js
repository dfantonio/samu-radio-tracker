import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addSessionErrors: ['errors'],
  startLogin: ['params'],
  successLogin: ['sessionToken'],
  errorLogin: ['errors'],
  clearToken: [],
});

/* Initial State */
const initialState = {
  sessionToken: '',
  hasErrors: false,
  errors: {
    email: '',
    senha: '',
  },
};

/* Reducer */
function successLogin(state, { sessionToken }) {
  return {
    ...state,
    sessionToken,
  };
}

function errorLogin(state, { errors }) {
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

function clearToken(state) {
  return {
    ...state,
    sessionToken: '',
  };
}

export const session = {
  [Types.ADD_SESSION_ERRORS]: addSessionErrors,
  [Types.SUCCESS_LOGIN]: successLogin,
  [Types.ERROR_LOGIN]: errorLogin,
  [Types.CLEAR_TOKEN]: clearToken,
};

export default createReducer(initialState, session);
