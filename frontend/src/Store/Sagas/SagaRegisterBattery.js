import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as registerTypes, Creators as registerCreators } from '../Ducks/register';
import { addBattery } from '../Services';

export function* registerBattery({ data }) {
  try {
    yield call(addBattery, data);
    yield put(registerCreators.SuccessAddBattery());
  } catch (error) {
    yield put(registerCreators.ErrorAddBattery(error.response.data.errors));
  }
}

export function* SagaRegisterBattery() {
  yield takeLatest(registerTypes.START_ADD_BATTERY, registerBattery);
}

export default SagaRegisterBattery;
