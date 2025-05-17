import { useState } from 'react';
import '../styles/sidenav.css'

function SideNav() {
    const [show, setShow] = useState<boolean>(false);

    const handleShow = () =>{
      setShow(!show)
    } ;
    return(
        <aside className='sidenav d-flex justify-content-between bg-dark text-white position-absolute overflow-hidden'>  
       
          <div className='sidenav-icons  p-2'>
            <button title='explorer' className='material-symbols-outlined text-white bg-dark rounded-circle' onClick={handleShow}>
              folder_open
            </button>
            <div className='d-flex flex-column position-absolute bottom-0 mb-5'>
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
          {/* { show &&  */}
          <div className='sidenav-offset border' style={{width: show ? '80%' : '0',transition: 'width 0.5s'}}>
              <div className='d-inline-flex flex-wrap gap-2'>
                  <button title='new folder' className="material-symbols-outlined p-0 bg-transparent text-white">
                      create_new_folder
                  </button>
                  <button  title="new file" className="material-symbols-outlined p-0 bg-transparent text-white">
                      note_add
                  </button>
              </div>
            
                <div>                   
                  <ul>
                    <li >📁 app hhhhhhhhhhhhhhhhhhhhhhh</li>
                  </ul> 
                </div>
                <div>
                </div>
          </div>
          {/* } */}
        
        </aside>
    )
}

export default SideNav;