import React, { useState } from 'react';
import './Country.css';

const Country = ({api_pops}) => {

    const [visited,SetVisted] =useState(false);

    const handle_work=()=>{

        SetVisted(true)

    }


    return (
        <div className={`box ${visited&& `box2`}`}>
            <p>Name of the country: {api_pops.name?.common}</p>
            <img className='center' src={api_pops.flags?.png} alt="pic of flag" />
            <p>Continent:{api_pops.continents}</p>
            <button onClick={handle_work}>{visited?'Visited':'not visited'}</button>
        </div>
    );
};

export default Country;