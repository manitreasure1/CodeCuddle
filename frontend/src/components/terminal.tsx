

function Terminal() {
  return (
    <div className="border bg-dark text-white" style={{width:'95.7%',height:'200px', position:'absolute', bottom:'0',right:'0', zIndex:'11'}}>
        <span>output</span>
        <br />
        <output>console output appears here</output>
    </div>
  )
}

export default Terminal;