import React from 'react';
import { Link } from "react-router";

const Use = ({ use }) => {

    const useStyle = {

        border: '2px solid blue',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'

    }

    return (
        <div style={useStyle}>

            <p>{use.name}</p>
            <p>{use.id}</p>
            <p>{use.email}</p>
            
            <Link to={`/users/${use.id}`}>Details</Link>
        </div>
    );
};

export default Use;