import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as sessionTypes, Creators as sessionCreators } from '../Ducks/session';
import { cadastro } from '../Services';

export function* startCadastro({ params }) {
  try {
    const response = yield call(cadastro, params);

    yield put(sessionCreators.successCadastro(response.data));
  } catch (error) {
    yield put(sessionCreators.errorCadastro(error.response.data.errors));
  }
}

export function* SagaStartCadastro() {
  yield takeLatest(sessionTypes.START_CADASTRO, startCadastro);
}

export default SagaStartCadastro;
