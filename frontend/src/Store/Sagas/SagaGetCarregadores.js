import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as listTypes, Creators as listCreators } from '../Ducks/lists';
import { getCarregadores as getCarregadoresRequest } from '../Services';

export function* getCarregadores({ params }) {
  try {
    const response = yield call(getCarregadoresRequest, params);

    yield put(listCreators.successGetCarregadores(response.data));
  } catch (error) {
    yield put(listCreators.errorGetCarregadores(error.response.data));
  }
}

export function* SagaGetCarregadores() {
  yield takeLatest(listTypes.START_GET_CARREGADORES, getCarregadores);
}

export default SagaGetCarregadores;
