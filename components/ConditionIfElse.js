import React, { Component } from 'react';

/* 
1.if/else
2.Element variable
3.Ternary conditional operator
4.Shortcut circuit operator
 */

export class ConditionIfElse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggrdIn:true
        }
    }
    
    render() {

        if (this.state.isLoggrdIn){
            return(
                <div>Welcome to Burma</div>
            )
        } else {
            return (
                <div>Welcome to yangon</div>
            )
        }

        
    }
}

export default ConditionIfElse
