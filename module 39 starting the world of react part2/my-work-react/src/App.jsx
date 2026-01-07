
import './App.css'

import Player_Score from './crickter_record';

import Users from './users';

function App() {

  function handleClick(){

    alert("I have clicked on the button");

  }

  const handleClick2=()=>{
    alert("i have cliked on the second button");
  }

  const handleClick3=(num)=>{

    const n= num+10;
    alert(n);

  }
  

  return (
    <>

       

      <Users ></Users>
      
      <Player_Score></Player_Score>
      

      <h1>Vite + React</h1>
      
      {/* using normal function */}
      <button onClick={handleClick}>Click</button>

      {/* using arraow funtion */}
      <button onClick={handleClick2}>Click</button>
      
      {/* to pass parameter on the click */}
      <button onClick={()=>{handleClick3(50)}}>Increase</button>


    </>
  )
}

export default App
