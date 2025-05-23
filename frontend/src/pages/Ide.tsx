import { Editor } from "@monaco-editor/react"
import SideNav from "../components/sidenav"
import Terminal from "../components/terminal"
import ExplainPanel from "../components/explain_panel"
import { useState } from "react"
import React from "react";


const Ide: React.FC = () => {
const [code, setCode] = useState(String);

const handleChange = (value: string | undefined) => {
  setCode(value || ''); 
}; 
console.log(`code ${code}`)
  return (
    <>
    <div className='d-flex bg-dark justify-content-between overflow-hidden' style={{height:'100vh'}}>   
        <SideNav />
        <div className='d-flex flex-column  border border-dark text-start' style={{flex: 1, minWidth: 0}}>
          <Editor  
            theme='vs-dark'
            defaultLanguage="python" 
            defaultValue=" # some comment" 
            onChange={handleChange}
          />
          <Terminal />
        </div>     
          <ExplainPanel />
      </div>
    </>
  )
}

export default Ide