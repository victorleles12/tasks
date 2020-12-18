import React from 'react'
import '../index.css'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

export default (props)=> {

    return(
        <div id="boxtarefa">
        <div id='faixalateral'>
            <div id='teste'><CreateIcon/></div>
        </div>
        <p id='btitulo'>Titulo</p>
        <p id='bdata'>12/10/1990</p>
        <p id='bdesc'>Pagar a conta de luz até o dia 05/03</p>
        <div id='iconedelete'><DeleteIcon/></div>
    </div>
    )
}