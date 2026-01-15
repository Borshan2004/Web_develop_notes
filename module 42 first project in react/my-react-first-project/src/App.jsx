
import Navbar from './Componets/navbar/Navbar'
import Blogs from './Componets/Blogs/Blogs'
import './App.css'


function App() {

  return (
    <>

      <Navbar></Navbar>
      

      <div className='main_container flex text-center'>

        <div className="container_left w-[70%]">
        
         <Blogs></Blogs>
        </div>

        <div className="container_right w-[30%]">
          Reading time : 0
          bookmarked count :0
        </div>
      </div>



    </>

  )
}

export default App
