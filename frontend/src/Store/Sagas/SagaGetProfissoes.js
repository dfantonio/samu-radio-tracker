import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as userTypes, Creators as userCreators } from '../Ducks/lists';
import { getProfissoes as getProfissoesRequest } from '../Services';

export function* getProfissoes() {
  try {
    const response = yield call(getProfissoesRequest);

    yield put(userCreators.successGetProfissoes(response.data));
  } catch (error) {
    yield put(userCreators.errorGetProfissoes(error.response.data));
  }
}

export function* SagaGetProfissoes() {
  yield takeLatest(userTypes.START_GET_PROFISSOES, getProfissoes);
}

export default SagaGetProfissoes;
