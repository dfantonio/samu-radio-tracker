import { createReducer, createActions } from "reduxsauce";

/* Action Creators start */
export const { Types, Creators } = createActions({
  startValidatePhone: ["phone", "creationToken", "sessionToken"],
  successValidatePhone: ["phone"],
  errorValidatePhone: ["error"]
});

const initialState = {
  phone: "",
  name: "",
  nickname: "",
  email: ""
};

/* Reducer */
function successValidatePhone(state, { phone }) {
  return { ...initialState, phone };
}

function errorValidatePhone(state, { error }) {
  return { ...initialState, error: { ...initialState.error, phone: error } };
}

export const user = {
  [Types.SUCCESS_VALIDATE_PHONE]: successValidatePhone,
  [Types.ERROR_VALIDATE_PHONE]: errorValidatePhone
};

export default createReducer(initialState, user);
