import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as userTypes, Creators as userCreators } from '../Ducks/lists';
import { getEmprestimos as getEmprestimosRequest } from '../Services';

export function* getEmprestimos({ params }) {
  try {
    const response = yield call(getEmprestimosRequest, params);

    yield put(userCreators.successGetEmprestimos(response.data));
  } catch (error) {
    yield put(userCreators.errorGetEmprestimos(error.response.data));
  }
}

export function* SagaGetEmprestimos() {
  yield takeLatest(userTypes.START_GET_EMPRESTIMOS, getEmprestimos);
}

export default SagaGetEmprestimos;
