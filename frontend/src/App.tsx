
import {createContext, useState } from 'react';
import React from 'react';
import './App.css'
import Ide from './pages/Ide'


interface ButtonContextType {
  activeButton: string
  setActiveButton: (button: string) => void;
}

export const ButtonContext = createContext<ButtonContextType| null> (null);


export const ButtonProvider = ({children}: {children: React.ReactNode}) =>{
  const [activeButton, setActiveButton] = useState<string>('run');

  return (
    <ButtonContext.Provider value={{activeButton, setActiveButton}}>
      {children}
    </ButtonContext.Provider>
  )

};


function App() {
  return (
    <>
     <div>
      <ButtonProvider>
            <Ide/>
      </ButtonProvider>
     </div>
    </>
  )
}

export default App
