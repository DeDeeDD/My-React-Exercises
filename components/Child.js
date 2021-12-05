import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={()=>props.holder("Ayann Lwann tal Amay")}>Su Taung</button>
        </div>
    )
}

export default Child
