import React, {useState} from "react";

function App()
{
   const [answer] = useState("yes");
   console.log(answer)
    
   return(
       <div>
           <p>Heureux ? {answer}</p>
       </div>
   )
}
export default App;