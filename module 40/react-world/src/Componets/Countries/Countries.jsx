import React, { use, useState } from 'react';
import Country from '../Country/country';
import './Countries.css'

const Countries = ({ pops }) => {

    const api_work_Countries = use(pops);

    const [visited_country, SetVisited_country] = useState([]);

    const [called_flag, SetCalled_flag] = useState([]);







    const handle_for_visisted_country = (api_pops) => {
        //to store the data and make updateable we use the store_visited_country as like temp
        const store_visited_country = [...visited_country, api_pops];
        SetVisited_country(store_visited_country);
    }


    const handle_for_flag = (flag) => {

        const store_called_flag = [...called_flag, flag];
        SetCalled_flag(store_called_flag);
     
    }


    return (
        <div>
            <h2>Treveling countries: {api_work_Countries.length}</h2>
            <h2>Visited cournty number:{visited_country.length}</h2>
            <ul>
                {
                    visited_country.map(visit => <li>{visit.name.common}</li>)
                }

            </ul>

            <div>
                {
                    called_flag.map(flag_loader=><img src={flag_loader.png} alt="pic of flag"></img>)

                }
            </div>

            <div className='grid_work'>
                {
                    api_work_Countries.map(country => <Country
                        visited_country_handler_pops={handle_for_visisted_country}
                        handle_for_flag_props = {handle_for_flag}
                        key={country.cca3}
                        api_pops={country}></Country>)

                }
            </div>

        </div>
    );
};

export default Countries;