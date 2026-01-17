import React, { useState } from 'react';
import Sub1 from './SubMain1/Sub1';
import Sub2 from './SubMain1/Sub2';

const Main1 = () => {

    const [savedItems, setSavedItems] = useState([]);

    const EventHandaler=(items)=>{

          setSavedItems([...savedItems,items]);
 

        console.log("Event Handaler",savedItems);
    }

    return (
        <div className='bg-[#ebf0f5]'>

           

            <div className='mx-64 py-44'>

                <h1 className='text-4xl font-medium py-1'>Active Auctions</h1>
                <p className='py-2'>Discover and bid on extraordinary items</p>
            


                <div className='flex gap-10 py-1'>

                    <Sub1 EventHandaler={EventHandaler} className="w-[70%]"></Sub1>
                    <Sub2 savedItems={savedItems} className="w-[30%]"></Sub2>

                </div>

            </div>


        </div>
    );
};

export default Main1;