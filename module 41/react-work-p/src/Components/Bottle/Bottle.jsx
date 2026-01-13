import React, { use, useEffect, useState } from 'react';
import Bottle2 from '../Bottle2/Bottle2';

import './Bottle.css'
import { show_data_in_the_local_stroge, add_new_data_for_the_local_storage } from '../../utils/local_storagework';

const Bottle = ({ api_pops }) => {


    const [click_button, Setclick_button] = useState([]);



    const data_api = use(api_pops)



    useEffect(() => {

        const storedata = show_data_in_the_local_stroge() || [];



        if (data_api.length > 0) {

            const store_cart = [];

            for (const id of storedata) {

                const cart_find = data_api.find(bottle => bottle.id === id)

                if (cart_find) {
                    store_cart.push(cart_find)
                }




            }

            Setclick_button(store_cart);

        }





    }, [data_api])




    const handle_click_on_button = (clicked_item) => {

        const added_on_ui = [...click_button, clicked_item]

        Setclick_button(added_on_ui);

        //save the id in the storge

        add_new_data_for_the_local_storage(clicked_item.id);

    }

    
    return (
        <div>
            <p>Added item length:{click_button.length}</p>
            <div className='bottle_container'>
                {
                    data_api.map(api_bottle => <Bottle2 key={api_bottle.id} api_bottle_api={api_bottle} handle_click_on_button_pops={handle_click_on_button}></Bottle2>)
                }

            </div>
        </div>

    );
};

export default Bottle;