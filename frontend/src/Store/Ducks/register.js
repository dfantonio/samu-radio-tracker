import { createReducer, createActions } from 'reduxsauce';

/* Action Creators start */
export const { Types, Creators } = createActions({
  addRegisterErrors: ['errors'],
  clearSuccess: [],
  startAddRadio: ['data'],
  SuccessAddRadio: [],
  ErrorAddRadio: ['errors']
});

const initialState = {
  hasError: false,
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
  const hasErrors = Object.values(state.errors).some(e => e);

  return {
    ...state,
    hasErrors,
    errors: {
      ...state.errors,
      ...errors
    }
  };
}

function startAddRadio(state) {
  return { ...state };
}

function SuccessAddRadio(state) {
  return { ...state, hasSuccess: true, hasError: false };
}

function ErrorAddRadio(state, { errors }) {
  return { ...state, hasError: true, errors: { ...state.errors, ...errors } };
}

export const user = {
  [Types.ADD_REGISTER_ERRORS]: addRegisterErrors,
  [Types.CLEAR_SUCCESS]: clearSuccess,
  [Types.START_ADD_RADIO]: startAddRadio,
  [Types.SUCCESS_ADD_RADIO]: SuccessAddRadio,
  [Types.ERROR_ADD_RADIO]: ErrorAddRadio
};

export default createReducer(initialState, user);
