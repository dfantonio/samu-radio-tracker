import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as userTypes, Creators as userCreators } from '../Ducks/lists';
import { getBaterias as getBateriasRequest } from '../Services';

export function* getBaterias() {
  try {
    const response = yield call(getBateriasRequest);

    yield put(userCreators.successGetBaterias(response.data));
  } catch (error) {
    yield put(userCreators.errorGetBaterias(error.response.data));
  }
}

export function* SagaGetBaterias() {
  yield takeLatest(userTypes.START_GET_BATERIAS, getBaterias);
}

export default SagaGetBaterias;
