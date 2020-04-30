import { takeLatest, put, all } from 'redux-saga/effects';
import { Creators as loading } from '../Ducks/loading';
import { Types as registerTypes } from '../Ducks/register';
import { Types as sessionTypes } from '../Ducks/session';
import { Types as listTypes } from '../Ducks/lists';
import { toSingular } from '../../Helpers';

const loginObj = {
  object: 'login',
  method: 'start',
};

const getParams = data => {
  return {
    object: toSingular(data.split('_')[2].toLowerCase()),
    method: data.split('_')[1].toLowerCase(),
  };
};

export function* addLoader({ type }) {
  yield put(loading.startLoading(getParams(type)));
}

export function* removeLoader({ type }) {
  yield put(loading.stopLoading(getParams(type)));
}

export function* addLoginLoader() {
  yield put(loading.startLoading(loginObj));
}

export function* removeLoginLoader() {
  yield put(loading.stopLoading(loginObj));
}

const GetLists = [
  takeLatest(listTypes.START_GET_STATUS, addLoader),
  takeLatest(listTypes.SUCCESS_GET_STATUS, removeLoader),
  takeLatest(listTypes.ERROR_GET_STATUS, removeLoader),
  takeLatest(listTypes.START_GET_RADIOS, addLoader),
  takeLatest(listTypes.SUCCESS_GET_RADIOS, removeLoader),
  takeLatest(listTypes.ERROR_GET_RADIOS, removeLoader),
  takeLatest(listTypes.START_GET_BATERIAS, addLoader),
  takeLatest(listTypes.SUCCESS_GET_BATERIAS, removeLoader),
  takeLatest(listTypes.ERROR_GET_BATERIAS, removeLoader),
  takeLatest(listTypes.START_GET_LOCAIS, addLoader),
  takeLatest(listTypes.SUCCESS_GET_LOCAIS, removeLoader),
  takeLatest(listTypes.ERROR_GET_LOCAIS, removeLoader),
  takeLatest(listTypes.START_GET_PROFISSOES, addLoader),
  takeLatest(listTypes.SUCCESS_GET_PROFISSOES, removeLoader),
  takeLatest(listTypes.ERROR_GET_PROFISSOES, removeLoader),
  takeLatest(listTypes.START_GET_EMPRESTIMOS, addLoader),
  takeLatest(listTypes.SUCCESS_GET_EMPRESTIMOS, removeLoader),
  takeLatest(listTypes.ERROR_GET_EMPRESTIMOS, removeLoader),
  takeLatest(listTypes.START_GET_CARREGADORES, addLoader),
  takeLatest(listTypes.SUCCESS_GET_CARREGADORES, removeLoader),
  takeLatest(listTypes.ERROR_GET_CARREGADORES, removeLoader),
];

const AddLists = [
  takeLatest(registerTypes.START_ADD_RADIO, addLoader),
  takeLatest(registerTypes.SUCCESS_ADD_RADIO, removeLoader),
  takeLatest(registerTypes.ERROR_ADD_RADIO, removeLoader),
  takeLatest(registerTypes.START_ADD_PROFISSAO, addLoader),
  takeLatest(registerTypes.SUCCESS_ADD_PROFISSAO, removeLoader),
  takeLatest(registerTypes.ERROR_ADD_PROFISSAO, removeLoader),
  takeLatest(registerTypes.START_ADD_EMPRESTIMO, addLoader),
  takeLatest(registerTypes.SUCCESS_ADD_EMPRESTIMO, removeLoader),
  takeLatest(registerTypes.ERROR_ADD_EMPRESTIMO, removeLoader),
];

export function* SagaLoader() {
  yield all([
    ...GetLists,
    ...AddLists,
    takeLatest(sessionTypes.START_LOGIN, addLoginLoader),
    takeLatest(sessionTypes.SUCCESS_LOGIN, removeLoginLoader),
    takeLatest(sessionTypes.ERROR_LOGIN, removeLoginLoader),
  ]);
}

export default SagaLoader;
