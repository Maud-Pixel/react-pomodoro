import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";

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

const minutes = "00";
const seconds = "00";
const element_minutes = <p>{minutes}</p>
const element_secondes = <p>{seconds}</p>
ReactDOM.render(element_minutes, document.querySelector(".number__minutes"));
ReactDOM.render(element_secondes, document.querySelector(".number__seconds") )