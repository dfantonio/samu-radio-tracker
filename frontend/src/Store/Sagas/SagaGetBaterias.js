import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as listTypes, Creators as listCreators } from '../Ducks/lists';
import { getBaterias as getBateriasRequest } from '../Services';

export function* getBaterias({ params }) {
  try {
    const response = yield call(getBateriasRequest, params);

    yield put(listCreators.successGetBaterias(response.data));
  } catch (error) {
    yield put(listCreators.errorGetBaterias(error.response.data));
  }
}

export function* SagaGetBaterias() {
  yield takeLatest(listTypes.START_GET_BATERIAS, getBaterias);
}

export default SagaGetBaterias;
