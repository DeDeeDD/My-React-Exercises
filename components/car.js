import React, { Component } from 'react';/* imrc */ /* ccc */ /* ss */

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            brand: "Toyota Belta",
            year:"2018", 
            color:"white",
            Number:"7096"

         }
    }

changeMyCar = () => {
    this.setState({ color:"white-grey", 
                    brand:"Toyota LandCrusier",
                    year:"2019"
});
}



    render() { 
        return (
        <div>
            <h1>My Car is {this.state.brand}.</h1>
            <h1>I bought {this.state.brand} Since {this.state.year} and the color is {this.state.color}.</h1>
            <button onClick={this.changeMyCar} >button2</button>
        </div>  );
    }
}
 
export default Car ;

