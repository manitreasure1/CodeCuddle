import { useState, useRef, useEffect } from "react";


function Sidenavoffset() {
  const [showFolderInput, setShowFolderInput] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);
  const folderInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (showFolderInput && folderInputRef.current && !folderInputRef.current.contains(event.target as Node)) {
        setShowFolderInput(false);
      }
      if (showFileInput && fileInputRef.current && !fileInputRef.current.contains(event.target as Node)) {
        setShowFileInput(false);
      }
    }
    if (showFolderInput || showFileInput) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFolderInput, showFileInput]);

  return (
    <div className='sidenav-offset border position-relative' style={{width:'230px'}}>
        <div className='d-inline-flex flex-wrap gap-2'>
            <button title='new folder' className="material-symbols-outlined p-0 bg-transparent text-white" onClick={() => { setShowFolderInput(true); setShowFileInput(false); }}>
                create_new_folder
            </button>
            <button title="new file" className="material-symbols-outlined p-0 bg-transparent text-white" onClick={() => { setShowFileInput(true); setShowFolderInput(false); }}>
                note_add
            </button>
        </div>
        {showFolderInput && <input ref={folderInputRef} type="text" placeholder="Enter folder name" autoFocus />}
        {showFileInput && <input ref={fileInputRef} type="text" placeholder="Enter file name" autoFocus />}
          <div >                   
            <ul>
              <li >📁 app hhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
              <li >📁 app hhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
              <li >📁 app hhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
            </ul> 
        </div>
    </div>
  )
}

export default Sidenavoffset;