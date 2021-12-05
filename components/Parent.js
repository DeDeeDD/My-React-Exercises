import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"Mother Suu Kyi"
         }
         this.handling = this.handling.bind(this)
     }
    
     handling (parameter1) {
         alert(`${this.state.name} Kyann Mar Par Say..${parameter1}` )
     }
    

    render() {
        return (
            <div>
               <Child holder={this.handling}/> 
            </div>
        )
    }
}

export default Parent
