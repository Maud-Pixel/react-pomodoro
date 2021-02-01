import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";


import HelloMessage from "./components/hellomessage";
import DisplayTime from "./components/newTimer.js";


 ReactDOM.render(<DisplayTime/>, document.querySelector(".number__seconds"));
 ReactDOM.render(<HelloMessage/> , document.getElementById("app"));











 
  
