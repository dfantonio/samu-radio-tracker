import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as listTypes, Creators as listCreators } from '../Ducks/lists';
import { getStatus as getStatusRequest } from '../Services';

export function* getStatus() {
  try {
    const response = yield call(getStatusRequest);

    yield put(listCreators.successGetStatus(response.data));
  } catch (error) {
    yield put(listCreators.errorGetStatus(error.response.data));
  }
}

export function* SagaGetStatus() {
  yield takeLatest(listTypes.START_GET_STATUS, getStatus);
}

export default SagaGetStatus;
