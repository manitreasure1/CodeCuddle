import './App.css'
import { Suspense} from 'react';
import Loading from './components/loading';
import Ide from './pages/Ide';
import './styles/ide.css'

// const Ide = lazy(() => new Promise<{ default: React.FC }>(resolve => setTimeout(() => import('./pages/Ide').then(module => resolve({ default: module.default })), 5000)));


function App() { 
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <Ide/>
    </Suspense>    
    </>
  )
}

export default App;
