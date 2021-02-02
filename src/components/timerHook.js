import React, {useState, useEffect} from "react";
import audiofile from "../sound/MacGyverSound.mp3"

const sound = new Audio(audiofile);

function App()
{
   const [secondes, setSecondes] = useState(300);
   const [is_start, setStart] = useState(false);
   const [isSoundStart, setSoundStart] = useState(false);
   const [intervalId, setIntervalId] = useState(null);
   function increment(){
       setSecondes(prevSecondes => prevSecondes + 60);
   } 

   function decrement(){
       setSecondes(prevSecondes => prevSecondes > 0 ? prevSecondes-60 : 0);
    }

   function reset(){
       setStart(false);
       setSecondes(0);
       sound.pause();
       clearInterval(intervalId);
   }

   function decrease(){
       setSecondes(prevSecondes => prevSecondes > 0 ? prevSecondes-1:0);   
   }
   
   function start()
   {
        if (is_start == false)
        {
            setIntervalId(setInterval(decrease, 1000)); 
            setStart(true);

        }
        else
        {
            clearInterval(intervalId);
            setStart(prevstart => prevstart = false);
        }  
   }
   
   function open()
   {
    
    document.querySelector(".border__background__number__two").style.display = "none"; 
    sound.pause();
    
   }
   useEffect(
      function Break()
       {
           if(secondes == 0 && isSoundStart == false && is_start ==true)
           {
               sound.play();
               setSoundStart(true);
               document.querySelector(".border__background__number__two").style.display = "block"; 
           }
       }
   )

   
   const sec = String((secondes%60)).padStart(2, '0');
   
   const min= String(Math.trunc(secondes/60)).padStart(2, '0');
        
   return(
       <div className="box">
           <div className="border__background__number">
                <div>
                    <p className="timing">{min}:{sec}</p>
                </div>
                <div>
                    <div className="buttons__change">
                        <div className="buttons__change__minus" onClick={decrement}>-</div>
                        <div className="buttons__change__plus" onClick={increment}>+</div>
                    </div>
                    <div className="buttons__start" onClick={start}>Start</div>
                    <div className="buttons__reset" onClick={reset}>Reset</div>
                        
                </div>
                <div className="border__background__number__two">
                    <p className="sentence">Take a break</p>
                    <button className="buttons__reset__two" onClick={reset,open}>Reset</button>
                </div>
                <p>{console.log(secondes)}</p>
            </div>
       </div>
       
   )
}
export default App;