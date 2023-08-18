import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/index.scss";
import reportWebVitals from './reportWebVitals';
import Main from './router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
    <ToastContainer />
  </React.StrictMode>
);


reportWebVitals();