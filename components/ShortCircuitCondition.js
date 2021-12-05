import React, { Component } from 'react'

export class ShortCircuitCondition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggIn:true
        }
    }
    
    render() {
        return (
            this.state.isLoggIn && <div>Welcome to Yangon</div>
        )
    }
}

export default ShortCircuitCondition
