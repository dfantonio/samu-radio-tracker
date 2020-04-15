import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as registerTypes, Creators as registerCreators } from '../Ducks/register';
import { Creators as listCreators } from '../Ducks/lists';
import { finishEmprestimo as finishEmprestimoRequest } from '../Services';

export function* finishEmprestimo({ data }) {
  try {
    yield call(finishEmprestimoRequest, data);

    yield put(listCreators.startGetEmprestimos({ status: 1 }));
  } catch (error) {
    yield put(registerCreators.errorFinishEmprestimo(error.response.data));
  }
}

export function* SagaFinishEmprestimo() {
  yield takeLatest(registerTypes.START_FINISH_EMPRESTIMO, finishEmprestimo);
}

export default SagaFinishEmprestimo;
