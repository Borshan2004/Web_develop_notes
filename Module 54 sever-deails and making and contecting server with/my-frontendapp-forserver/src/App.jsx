

import { use } from 'react'
import './App.css'
import Useritem from './Compound/Useritem'

const useritem = fetch('http://localhost:3000/user').then(res=>res.json())

function App() {

  const useritemuse = use(useritem)

  return (
    <>
      <div>
        <Useritem useritemuse={useritemuse}></Useritem>
        <h1>Server management work</h1>
      </div>
    </>
  )
}

export default App
