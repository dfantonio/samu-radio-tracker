import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as registerTypes, Creators as registerCreators } from '../Ducks/register';
import { Creators as listCreators } from '../Ducks/lists';
import { addEmprestimo } from '../Services';

export function* registerEmprestimo({ data }) {
  try {
    yield call(addEmprestimo, data);
    yield put(registerCreators.SuccessAddEmprestimo());
    yield put(listCreators.startGetEmprestimos({ status: 1 }));
  } catch (error) {
    yield put(registerCreators.ErrorAddEmprestimo(error.response.data.errors));
  }
}

export function* SagaRegisterEmprestimo() {
  yield takeLatest(registerTypes.START_ADD_EMPRESTIMO, registerEmprestimo);
}

export default SagaRegisterEmprestimo;
