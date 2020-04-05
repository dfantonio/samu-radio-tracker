import { all } from 'redux-saga/effects';
import SagaLoader from './SagaLoader';
import SagaGetStatus from './SagaGetStatus';
import SagaRegisterRadio from './SagaRegisterRadio';
import SagaRegisterBattery from './SagaRegisterBattery';
import SagaRegisterLocal from './SagaRegisterLocal';

export default function* sagas() {
  yield all([
    SagaLoader(),
    SagaRegisterRadio(),
    SagaGetStatus(),
    SagaRegisterBattery(),
    SagaRegisterLocal()
  ]);
}
