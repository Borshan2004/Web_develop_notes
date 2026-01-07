import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cricket_player from './cricket'

import './App.css'

import ToDo from './Todo';
import Song_lover from './songs_lover'

function App() {
  const [count, setCount] = useState(0)

  const crickters=["shakib","tamim","mashrafee","musfiq","ryiad","mustafizur","tamzim sakib"];

  const singers=[
    {id:1,name:"Honey singer",age:"56"},
    {id:2,name:"Tahasn",age:"45"},
    {id:3,name:"Argit sing",age:"46"},
    {id:4,name:"Justin ",age:"36"},
  ]

  return (
    <>
      <h1>React core concept</h1>
      {/* 
      <Person></Person>
      <Student></Student>
      <Student></Student>
      <Developer name="hasan" tech="python"></Developer>
      <Developer name="kamal" tech="js"></Developer>
      <Player name="sakib" runs="200"></Player>
      <Player name="tamim" runs="50"></Player> */}
    
    {/* <ToDo task="study"  isDone={true}></ToDo>
    <ToDo task="programing"  isDone={false}></ToDo>
    <ToDo task="eating"  isDone={false}></ToDo> */}

    {

       singers.map(sing=><Song_lover obj_song={sing}></Song_lover>)

    }

      {
        crickters.map(crickter=><Cricket_player name={crickter}></Cricket_player>)
      } 



    </>
  )
}

function Player({name,runs}){

  const player_style={

      color:'blue',
      border:'5px solid blue',
      margin:'10px'
  }

  return(
    <div style={player_style}>
      <h2>Player name: {name}</h2>
      <h3>Player runs: {runs}</h3>
    </div>
  )

}


function Developer(val){

  console.log(val);

  const develop_style={

      color:'red',
      border:'5px solid red',
      margin:'10px'
  }

  return(
    <div style={develop_style}>
      <h1>Developer: {val.name}</h1>
      <h4>Bd Devloper use : {val.tech}</h4>
    </div>
  )

}

function Student(){

  return(
    <div className='st_css'>
      <p>Name:</p>
      <p>Department:</p>
    </div>
  )

}

function Person(){

  const age=15;
  const name ="borshan"

  const person_style={
    color:'red',
    textAlign:"right"
  }

  return (

    <p style={person_style}>hello this is borshan{age} and name is {name}</p>

  )
}

function Sports(){

  return(

    <div>
      <p>hello</p>
      <h1>borshan</h1>
    </div>

  )

}

export default App
