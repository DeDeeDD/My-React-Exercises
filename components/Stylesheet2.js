import React from 'react'
import './Style.css'

function Stylesheet2(props) {
    let colour = props.color ? "third" : "";
    let colour2 = props.fouth ? "fouth" : "";
    return (
        <div>
            <p className={`${colour} ${colour2} `}> Velit sit ad tempor consequat do nulla exercitation adipisicing esse pariatur veniam anim consectetur et. Aliqua id ipsum veniam adipisicing magna mollit cillum labore. Do ut Lorem qui qui reprehenderit quis voluptate esse Lorem do esse voluptate aliquip Lorem. Ut id mollit fugiat minim culpa ex ipsum dolor commodo aliqua duis irure. Occaecat commodo nulla irure excepteur enim. </p>
        </div>
    )
}

export default Stylesheet2
