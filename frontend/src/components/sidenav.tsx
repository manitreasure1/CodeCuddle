import { useState } from 'react';
import Sidenavoffset from './sidenavoffset';


function SideNav({onToggle}:{onToggle?: any}) {
  
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () =>{
    setShow(!show)
    onToggle(!show)
  };
  
  return(
    <aside className='sidenav d-flex  text-white' style={{zIndex:'15', maxWidth:'25%'}}>  
      <div className='sidenav-icons p-2  d-flex flex-column justify-content-between'>
        <button title='explorer' className='material-symbols-outlined text-white bg-dark rounded-circle' onClick={handleShow}>
          folder_open
        </button>
        <div className='d-flex flex-column bottom-0 mb-3 gap-3'>
          <button title='history' className="material-symbols-outlined  bg-dark text-white align-middle rounded-circle">
            history
          </button>
          <button  title='help' className="material-symbols-outlined bg-dark text-white align-middle rounded-circle">
            help
          </button>
          <button title='settings' className="material-symbols-outlined bg-dark text-white align-middle rounded-circle">
            settings
          </button>
        </div>
      </div>  
      {show && <Sidenavoffset/>}
    </aside>
  )
}

export default SideNav;