
import './App.css'
import Users from './Compounds/Users'

const userpromise = fetch('http://localhost:5000/users').then(res=>res.json());

function App() {


  return (
    <>
      <div>
        <Users  userpromise={userpromise}></Users>
      </div>
    </>
  )
}

export default App
