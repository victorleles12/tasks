import React, {Component} from 'react'
import BoxInput from './boxImput'
import '../index.css'

class eventoTeste extends Component {
    eventoDeClique(){
    console.log('teste de click')
    }

render(){

    return(
        <div id='boxtop'>
        <p id='titulo'>Titulo</p>
        <BoxInput id='inputTitulo'/>
        <p id='data'>Data</p>
        <BoxInput id='inputData' type='date'/>
        <p id='descricao'>Descrição</p>
        <BoxInput id='inputDesc'/>
        <button id='guardar' onClick={this.eventoDeClique}>Guardar</button>
        </div>
    )
}
} 


export default eventoTeste