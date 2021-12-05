import React, { Component } from 'react'

 class TernaryCondition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggIn:true
        }
    }
    
    render() {
        return this.state.isLoggIn ? <div>Welcome to Burma</div>:
        <div>Welcome to Yongon</div>
    }
}

export default TernaryCondition
