import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';

import { connectRouter } from 'connected-react-router';

import loading from './loading';
import lists from './lists';
import session from './session';
import register from './register';

const resettable = resettableReducer('RESET');

export default history =>
  combineReducers({
    loading: loading,
    lists: resettable(lists),
    session: resettable(session),
    router: connectRouter(history),
    register: resettable(register)
  });
