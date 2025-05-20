import { useState } from "react";
import '../styles/sidenav.css'
function ExplainPanel() {

  const [show, setShow] = useState<boolean>(true);

  const handleClose = ()=>{
    setShow(!show)
  }
  return (
    <>
    {
      show &&

    <div className=" bg-dark text-white d-flex flex-column " style={{width: 350, maxWidth: '100vw', flexShrink: 0}} >
      <div className="border">
        <span className="btn text-white  " onClick={handleClose}>&times;</span>
          <h3 style={{wordWrap:'break-word'}}>AI Explanation</h3>
          <nav className=" bg-dark explain-nav" >
              <ul className=" ">
                  <li title="defualt explanation" className="btn text-white border flex-fill ">Default</li>
                  <li title="explain code to me like I am 5years" className="btn text-white border flex-fill ">ELI5</li>
                  <li title="explain with emojis" className="btn text-white border flex-fill ">Emoji</li>
                  <li title="explain in grandma mode" className="btn text-white border flex-fill ">GrandMa</li>
              </ul>
          </nav>
      </div>
      <div className="flex-fill overflow-auto text-start lh-lg" style={{scrollbarColor:'#3f4042 #e4e8ef00'}}>
        <output className='p-2 ' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquid in cumque fugit! Optio, asperiores sunt animi ducimus ur ab a dolorum quae possimus provident quasi? Libero eius harum eum nostrum odio. Officiis corrupti ut veritatis, quo, fugit Nostrum ipsam excepturi magni ullam quibusdam cumque qui rerum labore, nihil, officia pariatur saepe repellat reprehenderit! Fugiat, dolorum eum quod dolorem incidunt architecto maiores temporibus nostrum veritatis exercitationem! Officia officiis quis ex at, minus in quam nihil voluptate. Amet doloremque deserunt iusto accusantium totam autem expedita.
        </output>
      </div>
    </div>
    }
    </>
  )
}

export default ExplainPanel;