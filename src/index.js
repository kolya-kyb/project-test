import React from 'react';
import ReactDOM from 'react-dom/client';

import { store,persistor } from './redux/store';
import { Provider } from 'react-redux';

import { App } from 'App';
import AuthLayout from './components/AuthLayout/AuthLayout';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
      <App />
        </AuthLayout>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);
