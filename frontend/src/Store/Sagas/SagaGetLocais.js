import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as userTypes, Creators as userCreators } from '../Ducks/lists';
import { getLocais as getLocaisRequest } from '../Services';

export function* getLocais() {
  try {
    const response = yield call(getLocaisRequest);

    yield put(userCreators.successGetLocais(response.data));
  } catch (error) {
    yield put(userCreators.errorGetLocais(error.response.data));
  }
}

export function* SagaGetLocais() {
  yield takeLatest(userTypes.START_GET_LOCAIS, getLocais);
}

export default SagaGetLocais;
