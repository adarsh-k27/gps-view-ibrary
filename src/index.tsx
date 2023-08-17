import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/index.scss";
import reportWebVitals from './reportWebVitals';
import Main from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);


reportWebVitals();