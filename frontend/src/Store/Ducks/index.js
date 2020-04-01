import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';

import { connectRouter } from 'connected-react-router';

import loading from './loading';
import user from './user';
import session from './session';
import register from './register';

const resettable = resettableReducer('RESET');

export default history =>
  combineReducers({
    loading: loading,
    user: resettable(user),
    session: resettable(session),
    router: connectRouter(history),
    register: resettable(register)
  });
