
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/IDE.css'
import Editor from "../Components/editor";
import Console from "../Components/console";
import { useEffect, useState } from "react";
import api from "../api";

function Ide() {
  const [childData, setChlidData] = useState<{[key: string]: string}>({})
  const [sendOutPut , setSendOutPut] = useState<string>("")
  const [loading, setLoading] = useState<string>("")
  const [error, setError] = useState<string>("")

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
  async function sendRunRequestOrExplainRequest() {


    // const requestType = (url: string): string => {
    //   switch(url){
    //     case childData['code']:
    //     case childData['']:
    //       break;
    //     case "":
    //       break;
    //     default:
    //   }
    //   return url
    // }


    
    try{
      setLoading("loading...")
      await api.post("")
      .then((response)=>{
        console.log(response.data)
        setSendOutPut(response.data)
        setLoading("")
      })
    }catch(err){
      console.error(err)
      setError(`An error occurred while processing the request: ${err}`);
      setLoading("");
    }
  };
  useEffect(()=>{
    sendRunRequestOrExplainRequest();
  });

  return (
    <>
    <Container fluid className="ide-container">
      <Row className="ide-container-items">
        <Editor sendDataToParent={(log: { code: string; selectedLanguage: string; activeButton: string }) => EditorLogs(log)}/>
        <Console 
          sendDataToParent={(output: string) => consoleLogs(output)} 
          outPutResponse = {sendOutPut}
        />
      </Row>
    </Container>
    </>
  )
}

export default Ide;