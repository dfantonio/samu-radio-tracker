import { takeLatest, call, put } from 'redux-saga/effects';
import { Types as sessionTypes, Creators as sessionCreators } from '../Ducks/session';
import { history } from '../history';
import { login } from '../Services';
import { paths } from '../../routes';

export function* startLogin({ params }) {
  try {
    const response = yield call(login, params);

    yield put(sessionCreators.successLogin(response.data.sessionToken));
    yield call([history, history.push], paths.HOME);
  } catch (error) {
    yield put(sessionCreators.errorLogin(error.response.data.errors));
  }
}

export function* SagaStartLogin() {
  yield takeLatest(sessionTypes.START_LOGIN, startLogin);
}

export default SagaStartLogin;
