import { all } from 'redux-saga/effects';
import SagaLoader from './SagaLoader';
import SagaGetStatus from './SagaGetStatus';
import SagaRegisterRadio from './SagaRegisterRadio';

export default function* sagas() {
  yield all([SagaLoader(), SagaRegisterRadio(), SagaGetStatus()]);
}
