

import axios from 'axios'
import './App.css'
import Navbar2 from './Compunds/Navbar2/Navbar'
import PieWorkChart from './Compunds/PieChart/PieWorkChart'

import Test from './Compunds/AxiosTest/Test'


const axios_api = axios.get('marks.json');

function App() {


  return (
    <>
      <Navbar2></Navbar2>
      <PieWorkChart></PieWorkChart>
      <Test axios_api={axios_api}></Test>
    </>
  )
}

export default App
