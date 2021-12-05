import React from 'react'
import './Style.css'
 
function Stylesheet(props) {
    let colorName = props.color ? 'primary' : '';
    let fontSize = props.font ? 'secondary' : '';
    let colorTwoName = props.c2 ? 'third' : '';

    console.log(props)
    return (
        <div>
            <h1 className = {`${colorName} ${fontSize} ${colorTwoName}  `} >My Style is  {props.name}</h1>
        </div>
    )
}

export default Stylesheet;
 