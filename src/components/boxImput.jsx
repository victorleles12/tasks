import React from 'react'

export default (props)=> {

    return(
        <input type="text" id={props.id} type={props.type} placeholder={props.value}/>
    )
}