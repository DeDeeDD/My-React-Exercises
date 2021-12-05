import React, { Component } from 'react'

class EventBind extends Component {
constructor(props) {
    super(props)

    this.state ={
         message:"Hello World"
    }
    this.pressHandler= this.pressHandler.bind(this);/* 3rd Method */
}

/* 

    pressHandler () {
    this.setState({
        message:"Hello Pyae Phyo Thant"
    })
}
*/

    pressHandler = ()=>{
        this.setState({
            message:"Hello Pyae Phyo Thant"
        })
    }      /* 4th Method */

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={()=>this.pressHandler()}>Press</button>*/}
                {/*<button onClick={this.pressHandler.bind(this)}>Press1</button>*/}
                <button onClick={this.pressHandler}>Press2</button> {/* 3rd  And 4th Method */}
            </div>
        )
    }

}
export default EventBind
