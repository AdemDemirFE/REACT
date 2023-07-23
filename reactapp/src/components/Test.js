import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 10
        };
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        // Move the state update to componentDidMount
        this.setState({
            a: 20
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update");
    }

    
    shouldComponentUpdate() {
        console.log("Should Component Update");
        return false
    }

    render() {
        console.log("Render");
        return (
            <div>
                {/* Display the state value */}
                <p>Current state value of 'a': {this.state.a}</p>
            </div>
        );
    }
}

export default Test;