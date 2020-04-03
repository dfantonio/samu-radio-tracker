import { takeLatest, put, all } from 'redux-saga/effects';
import { Creators as loading } from '../Ducks/loading';
import { Types as registerTypes } from '../Ducks/register';

export function* addLoader() {
  yield put(loading.startLoading());
}

export function* removeLoader() {
  yield put(loading.stopLoading());
}

export function* SagaLoader() {
  yield all([
    takeLatest(registerTypes.START_ADD_RADIO, addLoader),
    takeLatest(registerTypes.SUCCESS_ADD_RADIO, removeLoader),
    takeLatest(registerTypes.ERROR_ADD_RADIO, removeLoader)
  ]);
}

export default SagaLoader;
