import React, {Component} from 'react'
import BoxInput from './boxImput'
import '../index.css'


class dadosTask extends Component {

    gravarDados = () => {
    console.log('Teste')
    }

render(){

    return(
        <div id='boxtop'>
        <p id='titulo'>Titulo</p>
        <BoxInput id='inputTitulo' />
        <p id='descricao'>Descrição</p>
        <BoxInput id='inputDesc'/>
        <button id='guardar' onClick={this.gravarDados}>Guardar</button>
        </div>
    )
}
} 


export default dadosTask