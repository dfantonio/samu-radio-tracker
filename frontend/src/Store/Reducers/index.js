import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';

import { connectRouter } from 'connected-react-router';

import loading from './loading';
import user from './user';
import session from './session';

const resettable = resettableReducer('RESET');

export default history =>
  combineReducers({
    user: resettable(user),
    session: resettable(session),
    loading: loading,
    router: connectRouter(history)
  });
