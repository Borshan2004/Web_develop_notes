import React from 'react';
import { useLoaderData } from 'react-router';

const Postdetails = () => {

    const usedata = useLoaderData();

    return (
        <div>
            
            <p>Post details {usedata.id}</p>

        </div>
    );
};

export default Postdetails;