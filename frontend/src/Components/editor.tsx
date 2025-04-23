
import {  Button, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ButtonContext } from "../App";


interface HandleInputEvent extends React.ChangeEvent<HTMLTextAreaElement> {}
interface HandleTabKeyEvent extends React.KeyboardEvent<HTMLTextAreaElement>{}

function Editor() {
    const [mode, setMode] = useState<string>('Normal');
    const [colorView, setColorView] = useState<boolean>(false);
    const [code, setCode] = useState<string>(`# Start coding...\n # COdeCuddle Editer \n print("Hello")`);
    const cmode: string[] = ['Normal', 'Color'];

    const buttonContext = useContext(ButtonContext);
    if (!buttonContext){
        throw new Error("Button context is Null")
    }
    const {setActiveButton} = buttonContext;


    const handleViewCLick = (value : string) =>{
        console.log(value);
        setMode(value);
        value === 'Color' ? setColorView(true) : setColorView(false);
    }
    
    const handleInput = (event: HandleInputEvent): void => {
      const textarea = event.target;
      setCode(textarea.value);
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

  return (
    <>
    <Col className="editor-wrapper">
    <div style={{position:'absolute', right:'0',  color:'#fff', margin:'1rem'}}>
        <Button onClick={()=>setActiveButton('run')}>Run</Button>
        &nbsp;&nbsp;
        <Button onClick={()=>setActiveButton('explain')}>Explain</Button>
    </div>
    
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
              language="python"
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
              onInput={handleInput}
          
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