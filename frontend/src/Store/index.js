import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Ducks from './Ducks';
import { history } from './history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware, { END } from 'redux-saga';
import sagas from './Sagas';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'session']
};

const sagaMiddleware = createSagaMiddleware();

const storeEnhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

const persistedReducer = persistReducer(persistConfig, Ducks(history));

const store = createStore(persistedReducer, storeEnhancer);

store.runSaga = sagaMiddleware.run;

store.close = () => store.dispatch(END);

store.runSaga(sagas);

const persistor = persistStore(store);

export { store, persistor };
