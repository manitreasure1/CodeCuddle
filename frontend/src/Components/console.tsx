
import { Col } from "react-bootstrap";
import SelectMode from "./selectMode";
import { useContext, useEffect, useState } from "react";
import { ButtonContext } from "../App";

interface ConsoleProps {
  sendDataToParent: (log: string) => void;
  outPutResponse: string;
}

function Console({ sendDataToParent, outPutResponse }: ConsoleProps) {
  const [mode, setMode] = useState<string>("Default");
  const [output, setOutput] = useState<string>("Output appears here...")

  const buttonContext = useContext(ButtonContext);
  if (!buttonContext){
    throw new Error("Button context is Null")
  }
  const {activeButton} = buttonContext;

  useEffect(()=>{
    const logMessage = mode 
    sendDataToParent(logMessage)
    setOutput(outPutResponse)
  }, [activeButton, mode])

  const handleModeChange = (newMode: string) => {
    setMode(newMode);
  };

  return (
    <>
        <Col className="console-panel bg-dark text-white p-0 m-0">
        {
          activeButton === 'explain' && <SelectMode mode={mode} setMode={handleModeChange}/>
        }
          <strong>Console:</strong>
          <output>{output}</output>
        </Col>
    </>
  )
}

export default Console;