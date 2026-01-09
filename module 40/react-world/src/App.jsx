
import { Suspense } from 'react';
import './App.css'
import Countries from './Componets/Countries/Countries'

const fetch_work= fetch('https://restcountries.com/v3.1/independent?status=true').then(res=>res.json());

function App() {
  

  return (
    <>
      
      <Suspense fallback={<h3>Loading for the api .......</h3>}>
        <Countries pops={fetch_work}>
          
        </Countries>
      </Suspense>

      
    
    
    </>
  )
}

export default App
