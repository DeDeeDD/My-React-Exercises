import React from 'react'
function Greet(props){
    return (
        <div>
            <h3>{props.name} is {props.character}.</h3>

        </div>
    ) 
}
export default Greet;