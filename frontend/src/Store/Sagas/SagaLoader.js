import { takeLatest, put, all } from 'redux-saga/effects';
import { Creators as loading } from '../Ducks/loading';
import { Types as registerTypes } from '../Ducks/register';
import { Types as userTypes } from '../Ducks/lists';

export function* addLoader() {
  console.log('entrei no loader');
  yield put(loading.startLoading());
}

export function* removeLoader() {
  yield put(loading.stopLoading());
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
];

export function* SagaLoader() {
  yield all([
    takeLatest(registerTypes.START_ADD_RADIO, addLoader),
    takeLatest(registerTypes.SUCCESS_ADD_RADIO, removeLoader),
    takeLatest(registerTypes.ERROR_ADD_RADIO, removeLoader),
    ...GetLists
  ]);
}

export default SagaLoader;
