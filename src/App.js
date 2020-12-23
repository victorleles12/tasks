import React, { Component } from 'react';
import BoxInputCompleto from './components/boxInputcompleto'
import Status from './components/Status'
import Boxtarefa from './components/boxTarefa'
import './index.css';

class App extends Component {

        state = {
            titulo: '',
            descricao: ''
        }

        submeterForm = () =>{
            this.setState({
                titulo:''  
            })
        }


    render() {
        return (
            <div>
                    <BoxInputCompleto submeterForm ={this.submeterForm}/>
                    <Status/>
                    <Boxtarefa titulo={this.state.titulo} descricao={this.state.descricao} />
            </div>
        );
    }
}

export default App;