import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";


import HelloMessage from "./components/hellomessage";
import DisplayTime from "./components/newTimer";
import App from "./components/timerHook";
//import Break from "./components/break";

 //ReactDOM.render(<DisplayTime/>, document.querySelector(".number__seconds"));
 //ReactDOM.render(<App/>, document.querySelector(".buttons__change"));
 ReactDOM.render(<App/>, document.getElementById("timer"));
 ReactDOM.render(<HelloMessage/> , document.getElementById("app"));
 //ReactDOM.render(<Break/>, document.getElementById("break"));










 
  
