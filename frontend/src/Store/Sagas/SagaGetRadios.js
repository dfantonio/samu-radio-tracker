import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as listTypes, Creators as listCreators } from '../Ducks/lists';
import { getRadios as getRadiosRequest } from '../Services';

export function* getRadios({ params }) {
  try {
    const response = yield call(getRadiosRequest, params);

    yield put(listCreators.successGetRadios(response.data));
  } catch (error) {
    yield put(listCreators.errorGetRadios(error.response.data));
  }
}

export function* SagaGetRadios() {
  yield takeLatest(listTypes.START_GET_RADIOS, getRadios);
}

export default SagaGetRadios;
