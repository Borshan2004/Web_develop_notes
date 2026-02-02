// import React, {  useEffect,useState } from "react";
import React from 'react';
import SingleBook from '../SingleBook/SingleBook';



const Book = ({bookloader}) => {

    // const [allbooks, setallbooks] = useState([]);

    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then((res) => res.json())
    //         .then((data) => setallbooks(data));
    // }, []);

    // console.log(allbooks)



    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
            {
                bookloader.map(bookitemloader=><SingleBook bookitemloader={bookitemloader}></SingleBook>)
            }
        </div>
    );
};

export default Book;