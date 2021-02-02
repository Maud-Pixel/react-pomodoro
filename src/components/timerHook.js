import React, {useState} from "react";
import audiofile from "../sound/MacGyverSound.mp3"

const sound = new Audio(audiofile);

function App()
{
   const [secondes, setSecondes] = useState(300);
   const [is_start, setStart] = useState(false);
   const [intervalId, setIntervalId] = useState(null);
   function increment(){
       setSecondes(prevSecondes => prevSecondes + 60);
   } 

   function decrement(){
       setSecondes(prevSecondes => prevSecondes > 0 ? prevSecondes-60 : 0);
    }

   function reset(){
       setSecondes(0);
   }

   function decrease(){
       setSecondes(prevSecondes => prevSecondes > 0 ? prevSecondes-1:0);   
   }
   
   function start()
   {
        if (is_start == false)
        {
            setIntervalId(setInterval(decrease, 1000)); 
            setStart(prevstart => prevstart = true);
        }
        else
        {
            clearInterval(intervalId);
            setStart(prevstart => prevstart = false);
        }  
   }
   function music()
   {
       sound.play();
   }

   const sec = secondes%60;
   
   const min= Math.trunc(secondes/60);
        
   return(
       
       <div className="border__background__number">
           <div>
               <p></p>
                <p className="timing">{min}:{sec}</p>
           </div>
           <div>
                <div className="buttons__change">
                    <div className="buttons__change__minus" onClick={decrement}>-</div>
                    <div className="buttons__change__plus" onClick={increment}>+</div>
                </div>
                <div className="buttons__start" onClick={start}>Start</div>
                <div className="buttons__reset" onClick={reset}>Reset</div>
                {/* <div className="buttons__musique" onClick={music}>Play</div> */}
            </div>
       </div>
   )
}
export default App;