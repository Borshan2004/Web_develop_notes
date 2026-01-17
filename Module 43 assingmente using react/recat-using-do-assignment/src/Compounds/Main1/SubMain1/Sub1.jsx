import React from 'react';
import { use } from 'react';
import Item from './SubItem/Item';

const fetchData = fetch('projects.json').then(res => res.json());

const Sub1 = ({ EventHandaler }) => {

    const fetchDatawork = use(fetchData);


    return (
        <div>

            <div className='grid grid-cols-3 gap-6'>
                {
                    fetchDatawork.map(items => <Item EventHandaler={EventHandaler} key={items.id} items={items}></Item>)
                }
            </div>

        </div>

    );
};

export default Sub1;