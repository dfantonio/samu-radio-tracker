import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  successSetToken: ['creationToken', 'sessionToken']
});
/* Initial State */
const initialState = {
  creationToken: '',
  sessionToken: ''
};

/* Reducer */
function successSetToken(state, { creationToken = '', sessionToken = '' }) {
  return {
    ...state,
    creationToken,
    sessionToken
  };
}

export const session = {
  [Types.SUCCESS_SET_TOKEN]: successSetToken
};

export default createReducer(initialState, session);
