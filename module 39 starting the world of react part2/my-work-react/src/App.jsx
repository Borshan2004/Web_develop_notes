
import { Suspense } from 'react';
import './App.css'

import Player_Score from './crickter_record';

import Users from './users';

import Users2 from './user2';



const fetch_work = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

//this is function 
const fetch_work_2= async()=>{

  const res =await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();

}

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
  
   ///* as now we are using function so we need to call that 
        
  const fetch_work_2_promise = fetch_work_2();

  return (
    <>

        

       <Suspense fallback={<p>Wating.....</p>}>

        <Users2 pops2={fetch_work_2_promise}></Users2>

       </Suspense>


       <Suspense fallback={<p>Loading......</p>}>

         <Users pops={fetch_work}></Users>

       </Suspense>
      
      
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
