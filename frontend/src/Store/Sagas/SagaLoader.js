import { takeLatest, put, all } from "redux-saga/effects";
import { Creators as loading } from "../Reducers/loading";

export function* addLoader() {
  yield put(loading.startLoading());
}

export function* removeLoader() {
  yield put(loading.stopLoading());
}

export function* SagaLoader() {
  yield all([
    // takeLatest(userTypes.START_VALIDATE_PHONE, addLoader),
    // takeLatest(userTypes.SUCCESS_VALIDATE_PHONE, removeLoader),
  ]);
}

export default SagaLoader;
