

import React,{Component} from 'react'

class Message extends Component {


    constructor(){
        super()
        this.state = {
            message:"Please Subscribe Channel..."
        }
    };

    changetext(){
        this.setState ({
            message:"Thank you..."
        })
    }
    render (){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changetext()}>Click</button>
            </div>
        )
    }
}

export default Message

{/*import React,{Component} from 'react'
class Message extends Component {

    constructor(){
        super()
        this.state={
            message : "Please Subscribe..."
        }
    }

    changeAlert(){
        this.setState({
            message:"Thanks You.."
        })
    }

    render (){
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.changeAlert()}>Click</button>
            </div>
        )
    }
}
export default Message
*/}