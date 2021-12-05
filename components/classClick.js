import React, { Component } from 'react'
 class ClassClick extends Component {

      hold ()  {
        console.log("now clicked in class clicked.....")
    }
    render() {
        return (
            <div>
                <button onClick={this.hold}>Click Now</button>
            </div>
        )
    }
}

export default ClassClick
