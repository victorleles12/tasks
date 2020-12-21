import React from 'react';
import ReactDOM from 'react-dom';
import BoxInputCompleto from './components/boxInputcompleto'
import Status from './components/Status'
import Boxtarefa from './components/boxTarefa'
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BoxInputCompleto/>
    <Status/>
    <Boxtarefa/>
  </React.StrictMode>,
  document.getElementById('root')
);
