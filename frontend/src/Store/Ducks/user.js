import { createReducer, createActions } from 'reduxsauce';

/* Action Creators start */
export const { Types, Creators } = createActions({
  startGetStatus: [],
  successGetStatus: ['status'],
  errorGetStatus: ['error'],
  errors: {
    status: ''
  }
});

const initialState = {
  status: []
};

/* Reducer */
function successGetStatus(state, { status }) {
  return { ...state, status };
}

function errorGetStatus(state, { error }) {
  return { ...initialState, errors: { ...state.errors, status: error } };
}

export const user = {
  [Types.SUCCESS_GET_STATUS]: successGetStatus,
  [Types.ERROR_GET_STATUS]: errorGetStatus
};

export default createReducer(initialState, user);
