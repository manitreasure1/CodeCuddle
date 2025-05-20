import { useState } from 'react';
import '../styles/sidenav.css'


function SideNav({onToggle}:{onToggle?: any}) {
  
    const [show, setShow] = useState<boolean>(false);

    const handleShow = () =>{
      setShow(!show)
      onToggle(!show)
    } ;
    return(
        <aside className='sidenav d-flex  bg-dark text-white' style={{zIndex:'15', maxWidth:'25%'}}>  
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
          {
            show && 
            <div className='sidenav-offset border position-relative' style={{width:'230px'}}>
                <div className='d-inline-flex flex-wrap gap-2'>
                    <button title='new folder' className="material-symbols-outlined p-0 bg-transparent text-white">
                        create_new_folder
                    </button>
                    <button  title="new file" className="material-symbols-outlined p-0 bg-transparent text-white">
                        note_add
                    </button>
                </div>
                  <div >                   
                    <ul>
                      <li >📁 app hhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                      <li >📁 app hhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                      <li >📁 app hhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                    </ul> 
                </div>
            </div>
          }
          
          
          
        
        </aside>
    )
}

export default SideNav;