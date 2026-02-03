import React from 'react';
import { useLoaderData } from 'react-router';
import SingleLayer from './SingleLayer/SingleLayer';

const LayerMember = () => {
    
    const loadedData = useLoaderData();
    console.log(loadedData);
    
    return (

        <div>
            <SingleLayer></SingleLayer>
        </div>
    );
};

export default LayerMember;