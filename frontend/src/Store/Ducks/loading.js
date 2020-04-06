import { createReducer, createActions } from 'reduxsauce';

/* Initial State */
const initialState = 0;

/* Reducer */
const startLoading = state => {
  return state + 1;
};

const stopLoading = state => {
  return state - 1;
};

/* Action Creators start */
export const { Types, Creators } = createActions({
  startLoading: null,
  stopLoading: null,
});

export const loading = {
  [Types.START_LOADING]: startLoading,
  [Types.STOP_LOADING]: stopLoading,
};

export default createReducer(initialState, loading);
