
import Navbar from './Componets/navbar/Navbar'
import Blogs from './Componets/Blogs/Blogs'
import './App.css'
import { useState } from 'react';


function App() {

  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const OnclikHandler_Bookmarked = (blog) => {
  

    setBookmarkedBlogs([...bookmarkedBlogs, blog]);

  }

  const OnclikHandler_TimeCount = (time,id) => {


    setReadingTime(readingTime + time);

    removeReadbookmarked(id);
    
  }

  const removeReadbookmarked=(id)=>{
  
    const remaining_bookmarked=bookmarkedBlogs.filter(remove=>remove.id!==id);
    setBookmarkedBlogs(remaining_bookmarked);
  }


  return (
    <>

      <Navbar></Navbar>


      <div className='main_container flex text-center'>

        <div className="container_left w-[70%]">

          <Blogs OnclikHandler_Bookmarked={OnclikHandler_Bookmarked} OnclikHandler_TimeCount={OnclikHandler_TimeCount}></Blogs>
        </div>

        <div className="container_right w-[30%]">
          <h2>Reading time : {readingTime}</h2>
          <h2>bookmarked count :{bookmarkedBlogs.length}</h2>
          {bookmarkedBlogs.map(marked=><p className='bg-blue-100 shadow m-2 p-5 text-3xl' key={marked.id}>{marked.title}</p>)}
          
        </div>
      </div>



    </>

  )
}

export default App
