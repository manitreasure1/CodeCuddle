

import './App.css'
import Editor from '@monaco-editor/react';
import SideNav from './components/sidenav';
import Terminal from './components/terminal';




function App() {
  return (
    <>
      <div >
        <SideNav/>
        <Editor 
        height="95vh" 
        // width="100%"
        theme='vs-dark'
        defaultLanguage="python" 
        defaultValue="// some comment" 
        />
        <Terminal/>
      </div>
    </>
  )
}

export default App
