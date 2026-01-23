import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {

    const usePosts= useLoaderData();
    console.log(usePosts);
    

    return (
        <div>
            {usePosts.map(post => <Post key={post.id} postdata={post}></Post>)}
        </div>
    );
};

export default Posts;