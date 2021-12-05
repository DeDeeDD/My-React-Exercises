import React from 'react'

function NameList() {
    const names = ['Samantha','Darrin','Larry','Endora'];
    return (
        <div>
            <div>{names[0]}</div>
            <div>{names[1]}</div>
            <div>{names[2]}</div>
            <div>{names[3]}</div>
        </div>
    )
}

export default NameList
