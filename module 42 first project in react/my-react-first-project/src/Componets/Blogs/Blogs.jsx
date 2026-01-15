import React, { useEffect } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = React.useState([]);

    useEffect(() => {

        fetch('/blogs.json')
            .then(response => response.json())
            .then(data => {

                setBlogs(data);

            });

    }, []);



    return (
        <div >

            <h2 className='text-3xl'>Total Blogs: {blogs.length}</h2>


            <div className='grid grid-cols-2 m-9 gap-10'>
                {blogs.map(blog => <Blog blog={blog}></Blog>)}

            </div>
        </div>
    );
};

export default Blogs;