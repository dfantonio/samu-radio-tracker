import { all } from 'redux-saga/effects';
import SagaLoader from './SagaLoader';

export default function* sagas() {
  yield all([SagaLoader()]);
}
