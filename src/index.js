import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";
//import Header from './components/Header'
console.log("hu");
class HelloMessage extends React.Component {
    render() {
        return (<div>
            <div className="container">
                <h1>Hello {this.props.name}</h1>
            </div>
        </div>);
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Maud" />, App);

console.log("hi");