import React, { useState } from 'react';
import './Country.css';

const Country = ({api_pops,visited_country_handler_pops,handle_for_flag_props}) => {

    const [visited,SetVisted] =useState(false);

    const handle_work=()=>{


        if(visited==true){
            SetVisted(false)
        }
        else{
            SetVisted(true);
        }

        visited_country_handler_pops(api_pops);
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
            <button onClick={()=>handle_for_flag_props(api_pops.flags)}>Flag call</button>
        </div>
    );
};

export default Country;