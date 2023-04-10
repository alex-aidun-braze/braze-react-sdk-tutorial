// @ts-check

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as braze from "@braze/web-sdk";

braze.initialize('1426ffd5-2add-406f-adde-f8a8dd31cab8', {
    baseUrl: "sdk.iad-01.braze.com",
    enableLogging: true,
    allowUserSuppliedJavascript: true
});

braze.changeUser('aaidunbetatesttwo');
braze.openSession();
braze.requestPushPermission();
braze.automaticallyShowInAppMessages();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


