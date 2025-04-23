
import { useState } from "react";

function SelectMode() {
    const [mode, setMode] = useState<string>('default');
    const modeOptions: string[] = ["Default", "ELI5" , "EMOji", "GRANDMA"];

    const handleModeClick = (value: string)=>{
        setMode(value)
        console.log(value)

    };
        return (
          <>
          <ul style={{padding:'0'}}>
            {
              modeOptions.map((option)=>(
                <li key={option} onClick={()=>handleModeClick(option)} style={{backgroundColor: mode === option ? '#007bff' : ''}}> 
                    {option}
                </li>
              ))
            }
          </ul>
           
          </>
        )
    

}
export default  SelectMode;