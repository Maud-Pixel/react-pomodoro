import React from "react";

class HelloMessage extends React.Component {
    constructor(){
        super()
        this.state ={
            character : {}
        } 
    }
    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                character : data
            })
        })
    }
    render() {
        return (
        <div>
            <div className="container">
                <h1>Hello {this.state.character.title}</h1>
            </div>
        </div>);
    }
}

export default HelloMessage