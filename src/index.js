import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BoxInput from './components/boxImput';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

function guardar() {
  alert("Great Shot!");
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div id='boxtop'>
    <p id='titulo'>Titulo</p>
    <BoxInput id='inputTitulo'/>
    <p id='data'>Data</p>
    <BoxInput id='inputData'/>
    <p id='descricao'>Descrição</p>
    <BoxInput id='inputDesc'/>
    <button id='guardar' onClick="guardar()">Guardar</button>
    </div>
    <div id='status'>
      <div id='aberto'>Abertos</div>
      <div id='fechado'>fechado</div>
    </div>
    <div id="boxtarefa">
        <div id='faixalateral'>
            <div id='teste'><CreateIcon/></div>
        </div>
        <p id='btitulo'>Titulo</p>
        <p id='bdata'>12/10/1990</p>
        <p id='bdesc'>Pagar a conta de luz até o dia 05/03</p>
        <div id='iconedelete'><DeleteIcon/></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

