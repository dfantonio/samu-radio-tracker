import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as listTypes, Creators as listCreators } from '../Ducks/lists';
import { getProfissoes as getProfissoesRequest } from '../Services';

export function* getProfissoes() {
  try {
    const response = yield call(getProfissoesRequest);

    yield put(listCreators.successGetProfissoes(response.data));
  } catch (error) {
    yield put(listCreators.errorGetProfissoes(error.response.data));
  }
}

export function* SagaGetProfissoes() {
  yield takeLatest(listTypes.START_GET_PROFISSOES, getProfissoes);
}

export default SagaGetProfissoes;
