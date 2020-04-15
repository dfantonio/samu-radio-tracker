import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as listTypes, Creators as listCreators } from '../Ducks/lists';
import { getLocais as getLocaisRequest } from '../Services';

export function* getLocais() {
  try {
    const response = yield call(getLocaisRequest);

    yield put(listCreators.successGetLocais(response.data));
  } catch (error) {
    yield put(listCreators.errorGetLocais(error.response.data));
  }
}

export function* SagaGetLocais() {
  yield takeLatest(listTypes.START_GET_LOCAIS, getLocais);
}

export default SagaGetLocais;
