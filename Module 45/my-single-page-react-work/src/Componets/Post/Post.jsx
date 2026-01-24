import React from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

const Post = ({postdata}) => {

    const navigate = useNavigate();

    const useStyle = {

        border: '2px solid blue',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'

    }

    const onclikkhandler = () => {
        
        // navigate(`/posts/${postdata.id}`);

        navigate('/mobile')
    }

    return (
        <div style={useStyle}>
            <p>{postdata.title}</p>
            <Link to={`/posts/${postdata.id}`}>Posts</Link>
            <button onClick={onclikkhandler}>number: {postdata.id}</button>
        </div>
    );
};

export default Post;