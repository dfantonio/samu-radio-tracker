import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as registerTypes, Creators as registerCreators } from '../Ducks/register';
import { addRadio } from '../Services';

export function* registerRadio({ data }) {
  try {
    yield call(addRadio, data);
    yield put(registerCreators.SuccessAddRadio());
  } catch (error) {
    yield put(registerCreators.ErrorAddRadio(error.response.data.errors));
  }
}

export function* SagaRegisterRadio() {
  yield takeLatest(registerTypes.START_ADD_RADIO, registerRadio);
}

export default SagaRegisterRadio;
