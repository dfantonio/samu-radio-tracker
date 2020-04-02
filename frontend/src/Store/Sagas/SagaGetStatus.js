import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as userTypes, Creators as userCreators } from '../Ducks/user';
import { getStatus as getStatusRequest } from '../Services';

export function* getStatus() {
  try {
    const response = yield call(getStatusRequest);

    yield put(userCreators.successGetStatus(response.data));
  } catch (error) {
    yield put(userCreators.errorGetStatus(error.response.data));
  }
}

export function* SagaGetStatus() {
  yield takeLatest(userTypes.START_GET_STATUS, getStatus);
}

export default SagaGetStatus;
