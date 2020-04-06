import { createReducer, createActions } from 'reduxsauce';

/* Action Creators start */
export const { Types, Creators } = createActions({
  startGetStatus: [],
  successGetStatus: ['status'],
  errorGetStatus: ['error'],
  startGetRadios: [],
  successGetRadios: ['radios'],
  errorGetRadios: ['error'],
  startGetBaterias: [],
  successGetBaterias: ['baterias'],
  errorGetBaterias: ['error'],
  startGetLocais: [],
  successGetLocais: ['locais'],
  errorGetLocais: ['error'],
  startGetProfissoes: [],
  successGetProfissoes: ['profissoes'],
  errorGetProfissoes: ['error'],
  errors: {
    status: '',
  },
});

const initialState = {
  status: [],
  radios: [],
  baterias: [],
  locais: [],
  profissoes: [],
};

/* Reducer */
function successGetStatus(state, { status }) {
  return { ...state, status };
}

function errorGetStatus(state, { error }) {
  return { ...initialState, errors: { ...state.errors, status: error } };
}

function successGetRadios(state, { radios }) {
  return { ...state, radios };
}

function errorGetRadios(state, { error }) {
  return { ...initialState, errors: { ...state.errors, radios: error } };
}

function successGetBaterias(state, { baterias }) {
  return { ...state, baterias };
}

function errorGetBaterias(state, { error }) {
  return { ...initialState, errors: { ...state.errors, baterias: error } };
}

function successGetLocais(state, { locais }) {
  return { ...state, locais };
}

function errorGetLocais(state, { error }) {
  return { ...initialState, errors: { ...state.errors, locais: error } };
}

function successGetProfissoes(state, { profissoes }) {
  return { ...state, profissoes };
}

function errorGetProfissoes(state, { error }) {
  return { ...initialState, errors: { ...state.errors, profissoes: error } };
}

export const lists = {
  [Types.SUCCESS_GET_STATUS]: successGetStatus,
  [Types.ERROR_GET_STATUS]: errorGetStatus,
  [Types.SUCCESS_GET_RADIOS]: successGetRadios,
  [Types.ERROR_GET_RADIOS]: errorGetRadios,
  [Types.SUCCESS_GET_BATERIAS]: successGetBaterias,
  [Types.ERROR_GET_BATERIAS]: errorGetBaterias,
  [Types.SUCCESS_GET_LOCAIS]: successGetLocais,
  [Types.ERROR_GET_LOCAIS]: errorGetLocais,
  [Types.SUCCESS_GET_PROFISSOES]: successGetProfissoes,
  [Types.ERROR_GET_PROFISSOES]: errorGetProfissoes,
};

export default createReducer(initialState, lists);
