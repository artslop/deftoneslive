import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './app/store';
import './styles/styles.scss';

import { AmplifyProvider } from '@aws-amplify/ui-react'
import Amplify from '@aws-amplify/core'
import config from '../src/aws-exports'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </Provider>
);


