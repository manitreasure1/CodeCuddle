import { Placeholder } from 'react-bootstrap';


function Loading() {
  return (
    <>
    <div className='d-flex justify-content-between ' style={{height:'100vh'}}>
      <Placeholder xs={2} animation='wave' className='placeholder border border-5'/>
        <div className='d-flex  flex-column flex-fill ' >
          <Placeholder animation='wave' className='placeholder workplace border border-5'/>
          
          <Placeholder animation='wave' className='placeholder terminal border border-5 '/>
        </div>
      <Placeholder xs={2} animation='wave' className='placeholder border border-5'/>
    </div>
    </>
  )
}

export default Loading;

