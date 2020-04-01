import { createReducer, createActions } from 'reduxsauce';

/* Action Creators start */
export const { Types, Creators } = createActions({
  startAddRadio: ['data'],
  SuccessAddRadio: ['response'],
  ErrorAddRadio: ['error']
});

const initialState = {
  radio: '',
  battery: '',
  place: '',
  errors: {
    radio: '',
    battery: '',
    place: ''
  }
};

/* Reducers */
function startAddRadio(state, data) {
  return { ...state };
}

function SuccessAddRadio(state) {
  return { ...state };
}

function ErrorAddRadio(state, { error }) {
  return { ...state, errors: { ...state.errors, radio: error } };
}

export const user = {
  [Types.START_ADD_RADIO]: startAddRadio,
  [Types.SUCCESS_ADD_RADIO]: SuccessAddRadio,
  [Types.ERROR_ADD_RADIO]: ErrorAddRadio
};

export default createReducer(initialState, user);
