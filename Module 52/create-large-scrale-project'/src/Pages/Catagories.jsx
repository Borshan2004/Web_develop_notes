import React from 'react';
import { useParams } from 'react-router';

const Catagories = () => {

    const {id} = useParams();

    return (
        <div>
            <p>Catagory number - {id} </p>
        </div>
    );
};

export default Catagories;