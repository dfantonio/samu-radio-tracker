import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as userTypes, Creators as userCreators } from '../Ducks/lists';
import { getRadios as getRadiosRequest } from '../Services';

export function* getRadios() {
  try {
    const response = yield call(getRadiosRequest);

    yield put(userCreators.successGetRadios(response.data));
  } catch (error) {
    yield put(userCreators.errorGetRadios(error.response.data));
  }
}

export function* SagaGetRadios() {
  yield takeLatest(userTypes.START_GET_RADIOS, getRadios);
}

export default SagaGetRadios;
