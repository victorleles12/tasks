import React, {Component} from 'react'
import '../index.css'


class dadosTask extends Component {
constructor(){
    super()

    this.state = {
        titulo: '',
        descricao: ''
    }
}

    alterarTitulo = (e)=>{
        this.setState({titulo: e.target.value})
    }

    alterarDescricao = (e)=>{
        this.setState({descricao: e.target.value})
    }

    submeterForm = (e) => {
         this.props.submeterForm();
        e.preventDefault()
    }


render(){

    return(
        <form className='boxtop' onSubmit={this.submeterForm}>
        <p id='titulo'>Titulo</p>
        <input type="text" id='inputTitulo' value={this.state.titulo} onChange={this.alterarTitulo}/>
        <p id='descricao' >Descrição</p>
        <input type="text" id='inputDesc' value={this.state.descricao} onChange={this.alterarDescricao}/>
        <input type='submit' id='guardar' onClick={this.gravarDados} />
        </form>
    )
}
} 


export default dadosTask