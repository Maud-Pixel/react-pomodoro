import React from "react";


let minutes = 10;
let seconds = 60;
let count = 0;
function decrease(){
    if (seconds >=1)
    {
        var element_secondes = (
            <p>{seconds = seconds - 1}</p>
            );
    }
    else
    {
         element_secondes = (
            <p>{seconds = 60 - 1}</p>
            );  
    }
    count += 1;
    if(count % 60 == 0 && minutes >0)
    {
        console.log("ok");
        var element_minutes = (
        <p>{minutes = minutes-1}</p>
        );
        ReactDOM.render(element_minutes, document.querySelector(".number__minutes"));
    }
    else if (minutes == 0 && seconds == 0)
    {
        minutes = "00";
        seconds = "00";
        ReactDOM.render(element_minutes, document.querySelector(".number__minutes"));
        ReactDOM.render(element_secondes, document.querySelector(".number__seconds"));
    }
    console.log(count);
    ReactDOM.render(element_secondes, document.querySelector(".number__seconds"));
}

setInterval(decrease, 1000);

