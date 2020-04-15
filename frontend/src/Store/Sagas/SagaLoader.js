import { takeLatest, put, all } from 'redux-saga/effects';
import { Creators as loading } from '../Ducks/loading';
import { Types as registerTypes } from '../Ducks/register';
import { Types as userTypes } from '../Ducks/lists';
import { toSingular } from '../../Helpers';

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

const GetLists = [
  takeLatest(userTypes.START_GET_STATUS, addLoader),
  takeLatest(userTypes.SUCCESS_GET_STATUS, removeLoader),
  takeLatest(userTypes.ERROR_GET_STATUS, removeLoader),
  takeLatest(userTypes.START_GET_RADIOS, addLoader),
  takeLatest(userTypes.SUCCESS_GET_RADIOS, removeLoader),
  takeLatest(userTypes.ERROR_GET_RADIOS, removeLoader),
  takeLatest(userTypes.START_GET_BATERIAS, addLoader),
  takeLatest(userTypes.SUCCESS_GET_BATERIAS, removeLoader),
  takeLatest(userTypes.ERROR_GET_BATERIAS, removeLoader),
  takeLatest(userTypes.START_GET_LOCAIS, addLoader),
  takeLatest(userTypes.SUCCESS_GET_LOCAIS, removeLoader),
  takeLatest(userTypes.ERROR_GET_LOCAIS, removeLoader),
  takeLatest(userTypes.START_GET_PROFISSOES, addLoader),
  takeLatest(userTypes.SUCCESS_GET_PROFISSOES, removeLoader),
  takeLatest(userTypes.ERROR_GET_PROFISSOES, removeLoader),
  takeLatest(userTypes.START_GET_EMPRESTIMOS, addLoader),
  takeLatest(userTypes.SUCCESS_GET_EMPRESTIMOS, removeLoader),
  takeLatest(userTypes.ERROR_GET_EMPRESTIMOS, removeLoader),
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
  yield all([...GetLists, ...AddLists]);
}

export default SagaLoader;
