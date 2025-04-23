
import { Col } from "react-bootstrap";
import SelectMode from "./selectMode";
import { useContext } from "react";
import { ButtonContext } from "../App";


function Console() {

  const buttonContext = useContext(ButtonContext);
  if (!buttonContext){
      throw new Error("Button context is Null")
  }
  const {activeButton} = buttonContext;


  return (
    <>
        <Col className="console-panel bg-dark text-white p-2">
        {
          activeButton === 'explain' && <SelectMode/>
        }
          <strong>Console:</strong>
          <div>Output appears here...</div>
        </Col>
    </>
  )
}

export default Console;