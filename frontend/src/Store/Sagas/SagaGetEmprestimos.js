import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as listTypes, Creators as listCreators } from '../Ducks/lists';
import { getEmprestimos as getEmprestimosRequest } from '../Services';

export function* getEmprestimos({ params }) {
  try {
    const response = yield call(getEmprestimosRequest, params);

    yield put(listCreators.successGetEmprestimos(response.data));
  } catch (error) {
    yield put(listCreators.errorGetEmprestimos(error.response.data));
  }
}

export function* SagaGetEmprestimos() {
  yield takeLatest(listTypes.START_GET_EMPRESTIMOS, getEmprestimos);
}

export default SagaGetEmprestimos;
