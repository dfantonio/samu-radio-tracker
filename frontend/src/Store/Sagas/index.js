import { all } from 'redux-saga/effects';
import SagaLoader from './SagaLoader';
import SagaGetStatus from './SagaGetStatus';
import SagaGetRadios from './SagaGetRadios';
import SagaGetLocais from './SagaGetLocais';
import SagaGetBaterias from './SagaGetBaterias';
import SagaGetProfissoes from './SagaGetProfissoes';
import SagaRegisterRadio from './SagaRegisterRadio';
import SagaRegisterBattery from './SagaRegisterBattery';
import SagaRegisterProfissao from './SagaRegisterProfissao';
import SagaRegisterLocal from './SagaRegisterLocal';

export default function* sagas() {
  yield all([
    SagaLoader(),
    SagaRegisterRadio(),
    SagaGetStatus(),
    SagaRegisterBattery(),
    SagaRegisterProfissao(),
    SagaRegisterLocal(),
    SagaGetRadios(),
    SagaGetBaterias(),
    SagaGetLocais(),
    SagaGetProfissoes(),
  ]);
}
