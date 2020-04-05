import { createReducer, createActions } from 'reduxsauce';

/* Action Creators start */
export const { Types, Creators } = createActions({
  addRegisterErrors: ['errors'],
  clearSuccess: [],
  startAddRadio: ['data'],
  SuccessAddRadio: [],
  ErrorAddRadio: ['errors'],
  startAddBattery: ['data'],
  SuccessAddBattery: [],
  ErrorAddBattery: ['errors'],
  startAddLocal: ['data'],
  SuccessAddLocal: [],
  ErrorAddLocal: ['errors']
});

const initialState = {
  hasErrors: false,
  hasSuccess: false,
  errors: {
    serialNumber: '',
    issi: '',
    patrimonio: ''
  }
};

/* Reducers */
function clearSuccess(state) {
  return { ...state, hasSuccess: false };
}

function addRegisterErrors(state, { errors }) {
  const newErrors = {
    ...state.errors,
    ...errors
  };
  const hasErrors = Object.values(newErrors).some(e => !!e);

  return {
    ...state,
    hasErrors,
    errors: newErrors
  };
}

function startAddRadio(state) {
  return { ...state };
}

function SuccessAddRadio(state) {
  return { ...state, hasSuccess: true, hasErrors: false };
}

function ErrorAddRadio(state, { errors }) {
  return { ...state, hasErrors: true, errors: { ...state.errors, ...errors } };
}

function startAddBattery(state) {
  return { ...state };
}

function SuccessAddBattery(state) {
  return { ...state, hasSuccess: true, hasErrors: false };
}

function ErrorAddBattery(state, { errors }) {
  return { ...state, hasErrors: true, errors: { ...state.errors, ...errors } };
}

function startAddLocal(state) {
  return { ...state };
}

function SuccessAddLocal(state) {
  return { ...state, hasSuccess: true, hasErrors: false };
}

function ErrorAddLocal(state, { errors }) {
  return { ...state, hasErrors: true, errors: { ...state.errors, ...errors } };
}

export const user = {
  [Types.ADD_REGISTER_ERRORS]: addRegisterErrors,
  [Types.CLEAR_SUCCESS]: clearSuccess,
  [Types.START_ADD_RADIO]: startAddRadio,
  [Types.SUCCESS_ADD_RADIO]: SuccessAddRadio,
  [Types.ERROR_ADD_RADIO]: ErrorAddRadio,
  [Types.START_ADD_BATTERY]: startAddBattery,
  [Types.SUCCESS_ADD_BATTERY]: SuccessAddBattery,
  [Types.ERROR_ADD_BATTERY]: ErrorAddBattery,
  [Types.START_ADD_LOCAL]: startAddLocal,
  [Types.SUCCESS_ADD_LOCAL]: SuccessAddLocal,
  [Types.ERROR_ADD_LOCAL]: ErrorAddLocal
};

export default createReducer(initialState, user);
