
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/IDE.css'
import Editor from "../Components/editor";
import Console from "../Components/console";
import { useState } from "react";

function Ide() {
  const [childData, setChlidData] = useState<{[key: string]: string}>({})

  const collectEditorAndEditorLogs = (key: string, log: string) => {
    setChlidData(prevLogs => ({...prevLogs, [key]: log}));
    console.log("Collect Editor And Editor Logs:", {...childData, [key]: log}); 
  };
 

  return (
    <>
    <Container fluid className="ide-container">
      <Row className="ide-container-items">
        <Editor sendDataToParent={(output: string) => collectEditorAndEditorLogs("Editor", output)}/>

        <Console sendDataToParent={(output: string) => collectEditorAndEditorLogs("Console", output)}/>
      </Row>
    </Container>
    </>
  )
}

export default Ide;