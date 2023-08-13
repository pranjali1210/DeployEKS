import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { init as initApm } from "@elastic/apm-rum";

initApm({
  serviceName: 'my-service-name',

  serverUrl: 'https://6687db2a719043c78ac20f7343d2eb11.apm.us-central1.gcp.cloud.es.io:443',

  serviceVersion: '',

  environment: 'my-environment'
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
