
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/IDE.css'
import Editor from "../Components/editor";
import Console from "../Components/console";

function Ide() {
  return (
    <>
    <Container fluid className="ide-container p-0">
      <Row>
        <Editor/>
        <Console/>
      </Row>
    </Container>
    </>
  )
}

export default Ide;