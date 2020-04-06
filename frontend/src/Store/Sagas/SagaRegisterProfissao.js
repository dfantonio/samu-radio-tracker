import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as registerTypes, Creators as registerCreators } from '../Ducks/register';
import { addProfissao } from '../Services';

export function* registerProfissao({ data }) {
  try {
    yield call(addProfissao, data);
    yield put(registerCreators.SuccessAddProfissao());
  } catch (error) {
    yield put(registerCreators.ErrorAddProfissao(error.response.data.errors));
  }
}

export function* SagaRegisterProfissao() {
  yield takeLatest(registerTypes.START_ADD_PROFISSAO, registerProfissao);
}

export default SagaRegisterProfissao;
