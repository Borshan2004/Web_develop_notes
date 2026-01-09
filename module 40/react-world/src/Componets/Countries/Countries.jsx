import React, { use } from 'react';
import Country from '../Country/country';
import './Countries.css'

const Countries = ({pops}) => {

    const api_work_Countries = use(pops);


    return (
        <div>
            <h2>Treveling countries: {api_work_Countries.length}</h2>
            
            <div className='grid_work'>
                {
          api_work_Countries.map(country=><Country key={country.cca3} api_pops={country}></Country>)

             }
            </div>
            
        </div>
    );
};

export default Countries;