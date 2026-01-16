import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, OnclikHandler_Bookmarked, OnclikHandler_TimeCount }) => {
    return (
        <div>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={blog.cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="author_work flex items-center justify-center gap-10 mr-15">
                        <p>{blog.author}</p>
                        <img className='w-15 pr-6' src={blog.author_img} alt="" />

                        <button className='btn btn-ghost' onClick={() => OnclikHandler_Bookmarked(blog)}><FaBookmark size={25} /> </button>
                        
                    </div>
                    <h2 className="card-title">{blog.title}</h2>
                    <p>A card compo body there are title and actions parts</p>
                    <div className="list_skill flex gap-1/2">
                        {
                            blog.hashtags.map(skill=><p key={skill}>{skill}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => OnclikHandler_TimeCount(blog.reading_time,blog.id)}>mark as read</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Blog;