
import { Suspense } from 'react';
import './App.css'
import Bottle from './Components/Bottle/Bottle';


const bottle_promoise = fetch('/bottle.json').then(res=>res.json());


function App() {
  

  return (
    <>
      <Suspense fallback={<h1>wait....</h1>}>
        <Bottle api_pops={bottle_promoise}>

        </Bottle>
      </Suspense>
    </>
  )
}

export default App
