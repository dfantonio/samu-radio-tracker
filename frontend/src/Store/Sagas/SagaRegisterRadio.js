import { takeLatest, call } from 'redux-saga/effects';
import { Creators as loading } from '../Ducks/loading';
import { Types as registerTypes } from '../Ducks/register';
import { addRadio } from '../Services';
import { bff } from '../Services/config';

export function* registerRadio({ data }) {
  console.log('saga: ', data);
  bff();
  yield call(addRadio, data);
}

export function* SagaRegisterRadio() {
  yield takeLatest(registerTypes.START_ADD_RADIO, registerRadio);
}

export default SagaRegisterRadio;
