import React from "react";




class DisplayTime extends React.Component
{
    constructor(){
        super()
        this.state = {
            minute:"00",
            second:"00",
            count: 0,
            intervalID: null,
        }
        this.DecreaseButton = this.DecreaseButton.bind(this)
        this.IncreaseButton = this.IncreaseButton.bind(this)
        this.Decrease = this.Decrease.bind(this)
        this.StartButton = this.StartButton.bind(this)
        this.ResetButton = this.ResetButton.bind(this)
    }
    
    DecreaseButton(){
        this.setState(prevState =>
            {
                return(
                    {minute : parseInt(prevState.minute)-1}
                )
                
            }) ;
        console.log("diminue");
    }
    IncreaseButton(){
        this.setState(prevState =>
            {
                return(
                    {minute : parseInt(prevState.minute)+1}
            )
        });
        console.log("augmente")
    }
    
    Decrease(){
        this.setState(prevState => {
            
            if(prevState.second > 0)
            {
                return(
                    { second : prevState.second - 1,
                      count : prevState.count + 1}
                )
            }
            else if  (prevState.second == 0 && prevState.minute > 0)
            {
                return(
                    { second: 59,
                      minute: prevState.minute-1}
                )
            }
            else
            {
                 clearInterval(this.state.intervalID);
            }
         }
        
        )
        console.log(this.state.count);
        
    }
    StartButton(){
      this.setState(
          {
              intervalID : setInterval(this.Decrease, 1000)   
          }
      ) 
    }
    ResetButton(){
       clearInterval(this.state.intervalID)
    }
    render() {
       
        return (
            <div>
                <p>{this.state.minute} : {this.state.second}</p>
                <button onClick={this.DecreaseButton}>-</button>
                <button onClick={this.IncreaseButton}>+</button>
                <button onClick={this.StartButton}>Start</button>
                <button onClick={this.ResetButton}>Reset</button>
            </div>
                
        )
    }
}

export default DisplayTime;