import React, { useState } from 'react';
import './Country.css';

const Country = ({api_pops}) => {

    const [visited,SetVisted] =useState(false);

    const handle_work=()=>{


        if(visited==true){
            SetVisted(false)
        }
        else{
            SetVisted(true);
        }

        // SetVisted(!visited)

    }


    return (
        //this is css for multiple class
        <div className={`box ${visited&& `box2`}`}>
            <p>Name of the country: {api_pops.name?.common}</p>
            <img className='center' src={api_pops.flags?.png} alt="pic of flag" />
            <p>Continent:{api_pops.continents}</p>
            {/* this css for single */}
            <button className={visited?'box':'box2'} onClick={handle_work}>{visited?'Visited':'not visited'}</button>
        </div>
    );
};

export default Country;