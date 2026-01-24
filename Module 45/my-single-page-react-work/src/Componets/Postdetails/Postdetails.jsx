import React from 'react';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router';

const Postdetails = () => {

    const usedata = useLoaderData();

    const navigate = useNavigate();

    const gobacktoPost = () => {
        navigate('/posts');
    }

    return (
        <div>
            
            <p>Post details {usedata.id}</p>
            <p>Post details {usedata.title}</p>
            <button onClick={gobacktoPost}>Go back to Post</button>

        </div>
    );
};

export default Postdetails;