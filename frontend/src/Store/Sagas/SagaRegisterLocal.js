import { takeLatest, call, put } from 'redux-saga/effects';
import {
  Types as registerTypes,
  Creators as registerCreators
} from '../Ducks/register';
import { addLocal } from '../Services';

export function* registerLocal({ data }) {
  try {
    yield call(addLocal, data);
    yield put(registerCreators.SuccessAddLocal());
  } catch (error) {
    yield put(registerCreators.ErrorAddLocal(error.response.data.errors));
  }
}

export function* SagaRegisterLocal() {
  yield takeLatest(registerTypes.START_ADD_LOCAL, registerLocal);
}

export default SagaRegisterLocal;
