import React from 'react'
import '../index.css'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


class BoxTarefa extends React.Component{      
     constructor(props){
      super(props)
      this.state = {
        titulo : 'Titulo Teste',
        descricao: 'Descricao Teste'
      }
    }


    
    render(props){
        return(
        <div id="boxtarefa">
            <div id='faixalateral'>
                <div id='teste'><CreateIcon/></div>
            </div>
                <p id='btitulo'>{this.state.titulo}</p>
                <p id='bdesc'>{this.state.descricao}</p>
            <div id='iconedelete'><DeleteIcon/></div>
        </div>
        )
    }
}

export default BoxTarefa