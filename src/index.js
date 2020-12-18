import React from 'react';
import ReactDOM from 'react-dom';
import BoxInputCompleto from './components/boxInputcompleto'
import Status from './components/Status'
import Boxtarefa from './components/boxTarefa'
import './index.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <BoxInputCompleto/>
    <Status/>
    <Boxtarefa/>
  </React.StrictMode>,
  document.getElementById('root')
);

