import React from 'react';
import { Link } from 'react-router';

const Post = ({postdata}) => {

    const useStyle = {

        border: '2px solid blue',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'

    }

    return (
        <div style={useStyle}>
            <p>{postdata.title}</p>
            <Link to={`/posts/${postdata.id}`}>Posts</Link>
        </div>
    );
};

export default Post;