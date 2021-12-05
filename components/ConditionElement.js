import React, { Component } from 'react'

export class ConditionElement extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        let message
        if (this.state.isLoggedIn){
            
                message=<div>welcome to Newfeed</div>
            
        }else {
            
                message=<div>sorry YOu don't Loggin</div>
            
        }
        return(
            <div>{message}</div>
        )

    }
}

export default ConditionElement


