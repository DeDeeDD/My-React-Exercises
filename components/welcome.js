import React, {Component} from 'react'

class Welcome extends Component {
    render(props){
        return <h3>{this.props.name} is {this.props.character}. </h3>
    }
}
export default Welcome;