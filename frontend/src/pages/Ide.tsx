
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/IDE.css'
import Editor from "../Components/editor";
import Console from "../Components/console";
import { useEffect, useState } from "react";
import api from "../api";

function Ide() {
  const [childData, setChlidData] = useState<{[key: string]: string}>({})

  const EditorLogs = ( log: { code: string; selectedLanguage: string; activeButton: string }) => {
      setChlidData(prevLogs => ({...prevLogs, ...log}));
    };

  const consoleLogs = (mode: string) => {
    setChlidData(prevLogs => ({
      ...prevLogs, 
      mode: mode, 
    }));
  };
  console.table(childData)

  
  // todo : 
  async function sendRunRequest() {
    await api.post("/api/run");
  }

  // todo : 
  const sendExplainRequest = async()=>{
    await api.post("/api/explain")
  };

  useEffect(()=>{
    // sendRunRequest();
    // sendExplainRequest();
  });

  return (
    <>
    <Container fluid className="ide-container">
      <Row className="ide-container-items">
        <Editor sendDataToParent={(log: { code: string; selectedLanguage: string; activeButton: string }) => EditorLogs(log)}/>
        <Console sendDataToParent={(output: string) => consoleLogs(output)}/>
      </Row>
    </Container>
    </>
  )
}

export default Ide;