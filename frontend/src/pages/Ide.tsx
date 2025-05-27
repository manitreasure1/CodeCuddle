import { Editor } from "@monaco-editor/react"
import SideNav from "../components/sidenav"
import Terminal from "../components/terminal"
import ExplainPanel from "../components/explain_panel"
import { useState } from "react"
import React from "react";
import ControlPanel from "../components/controlPanel"


const Ide: React.FC = () => {
  const [code, setCode] = useState(String);
  const [isClosed, setIsClosed] = useState(true);
  const [isPanelClosed, setIsPanelClosed] = useState(false);

  const handleChange = (value: string | undefined) => {
    setCode(value || ''); 
  }; 
  console.log(`code ${code}`)

  const handleRunIconClick = () =>{  
    setIsClosed(false)
  }

  const handleExplainIconClick = () =>{
    setIsPanelClosed(true)
  }
  
  return (
    <>
    
      <ControlPanel isAiExplanationOpen={handleExplainIconClick} isTerminalOpen={handleRunIconClick}/>
    <div className='d-flex bg-dark justify-content-between overflow-hidden' style={{height:'100vh'}}>   
        <SideNav />
        <div className='d-flex flex-column text-start' style={{ minWidth: 0, flex:'1'}}>
          <div style={{ flex: isClosed ? 1 : 0.7, minHeight: 0 }}>
            <Editor theme='vs-dark' defaultLanguage="python" defaultValue=" import sys sys.getSizeof([1, 2, 3])" onChange={handleChange}/>
          </div>
          {
            isClosed || 
            <div className="border overflow-auto" style={{ flex: 0.3, minHeight: '120px', maxHeight: '40%',   scrollbarColor:'#3f4042 #e4e8ef00' }}>
              <Terminal isClosed={isClosed} handleRunIconClick={()=> setIsClosed(true)}/>
            </div>
          }
        </div>     
          <ExplainPanel isPanelClosed={isPanelClosed} handleExplainIconClick={()=> setIsPanelClosed(false)}/>
      </div>
    </>
  )
}

export default Ide