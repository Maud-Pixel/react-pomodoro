import React from "react";

let name="John";
let phone="098";
let email= "ljlkjlkj#gmail.com";
let style ={
    color: "#ff0000",
    backgroundColor: "green"
}
function Card(props)
{
    return(
        <div>
            <img></img>
            <h1 className="name">{props.contact.name}</h1>
            <p className="phone">{props.contact.phone}</p>
            <p className="email" style={style}>{props.contact.email}</p>
        </div>
    )
}

export default Card