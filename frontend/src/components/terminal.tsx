import React, { useState } from "react";


function Terminal() {

  const [isClosed, setIsClosed] = useState(false);
  const handleClose = () =>{
    setIsClosed(!isClosed);
  };
  return (
    <>
    {
      isClosed ||
    <div className="border bg-dark text-white d-flex flex-column position-relative overflow-auto  lh-lg" style={{maxHeight:'40%', minHeight:'35%', scrollbarColor:'#3f4042 #e4e8ef00'}}>
      <span className="btn text-white bg-dark position-sticky top-0 "  onClick={handleClose}>&times;</span>
            
        <output className="p-3">
          Lorem ipsum la quibusdam. Excepturi amet veniam a fugiat illo reprehenderit aperiam?
        </output>
    </div>
    }
    </>
  )
}

export default React.memo(Terminal);