
import {  Button, Col } from "react-bootstrap";
import { useState, useContext, memo, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ButtonContext } from "../App";
import Options from "./options";


interface HandleTabKeyEvent extends React.KeyboardEvent<HTMLTextAreaElement>{}
interface HandleChangeEvent extends React.ChangeEvent<HTMLTextAreaElement> {}


function Editor({ sendDataToParent }: { sendDataToParent: (log: { code: string; selectedLanguage: string; activeButton: string }) => void }) {

  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [mode, setMode] = useState<string>('Normal');
  const [colorView, setColorView] = useState<boolean>(false);
  const [code, setCode] = useState<string>(`\n \n`);

  const cmode: string[] = ['Normal', 'Color'];

  const buttonContext = useContext(ButtonContext);
  if (!buttonContext){
    throw new Error("Button context is Null")
  }
  
  const {activeButton, setActiveButton} = buttonContext;
  
  useEffect(() => {
    if (activeButton == 'run') {
    
    const logMessage = {
      code: code,
      selectedLanguage: selectedLanguage,
      activeButton: activeButton,
    };
    
    sendDataToParent(logMessage)
    setActiveButton('')
    }
  }, [activeButton, selectedLanguage]);

  const handleViewCLick = (value : string) =>{
    setMode(value);
    value === 'Color' ? setColorView(true) : setColorView(false);
  }

  const handleChange = (event: HandleChangeEvent) => {
    const newCode = event.target.value;
    setCode(newCode);
  };

  const handleTab =(event: HandleTabKeyEvent)=>{
    if (event.key === 'Tab'){
    event.preventDefault();
    const start = event.currentTarget.selectionStart;
    const end = event.currentTarget.selectionEnd;
    const newValue = code.substring(0, start) + '    ' + code.substring(end);
    setCode(newValue)
    }
  };

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
  };

  const MemoizedButtons = memo(() => (
    <div>
      <Button onClick={() => handleButtonClick("run")}>Run</Button>
      &nbsp;&nbsp;
      <Button onClick={() => handleButtonClick("explain")}>Explain</Button>
    </div>
  ));
  return (
  <>
  <Col className="editor-wrapper">
  <MemoizedButtons/>
  <Options onLanguageChange={(language: string) => setSelectedLanguage(language)}/>
  
  <ul style={{position:'absolute', left:'0', bottom:'0', color:'#fff', padding:'0'}}>
    {
      cmode.map((option)=>(
        <li key={option} onClick={()=>{handleViewCLick(option)}} style={{backgroundColor: mode === option ? '#007bff' : ''}}>{option}</li>
      ))
    }
  </ul>
    {
      colorView ? (
      <SyntaxHighlighter
        language={selectedLanguage}
        style={atomDark}
        showLineNumbers
        customStyle={{
        width:'100%',
        height:'100%',
        padding: "0",
        background: "#282c34",
        fontSize: "1rem",
        fontFamily: "'Fira Code', monospace",
        whiteSpace: "pre-wrap",
        borderRadius:'0',
        overflow: "hidden auto",
        margin:'0',
        zIndex: 1, 
        }}
      >
        {code}
      </SyntaxHighlighter>
      )
      :
      <textarea
        value={code}
        onChange={handleChange}
        className="editor-textarea"
        spellCheck={false}
        onKeyDown={handleTab}
      />
    }
    </Col>
  </>
  )
}

export default Editor;