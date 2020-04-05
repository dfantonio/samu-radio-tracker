import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../Store';
import { PersistGate } from 'redux-persist/integration/react';

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WrappedComponent {...props} />
      </PersistGate>
    </Provider>
  );

  return hocComponent;
};
