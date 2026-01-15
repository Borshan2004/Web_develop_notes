import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
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
                        <FaBookmark size={25} />
                    </div>
                    <h2 className="card-title">{blog.title}</h2>
                    <p>A card compo body there are title and actions parts</p>
                    <div className="list_skill flex gap-1/2">
                        {
                            blog.hashtags.map(skill=><p>{skill}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">mark as</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Blog;