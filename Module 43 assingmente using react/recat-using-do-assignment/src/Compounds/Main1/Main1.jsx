import React, { useState } from 'react';
import Sub1 from './SubMain1/Sub1';
import Sub2 from './SubMain1/Sub2';

const Main1 = () => {

    const [savedItems, setSavedItems] = useState([]);

    const [likedItems, setLikedItems] = useState([]);


    const EventHandaler=(items)=>{

          setSavedItems([...savedItems,items]);
          
          changecolor(items);
        
    }

    const RemoveEventHandaler=(id)=>{

        const remaining= savedItems.filter(itemid=>itemid.id !== id);
        setSavedItems(remaining);
    }


    const changecolor=(items)=>{

        //here finding for the liked items
//         If the item is already liked:
//         remove it from likedItems
//         Else:
//         add it to likedItems
        setLikedItems((pre)=>pre.includes(items.id)?pre.filter(id=>id !== items.id):[...pre,items.id]);

    }

    return (
        <div className='bg-[#ebf0f5]'>

           

            <div className='mx-64 py-44'>

                <h1 className='text-4xl font-medium py-1'>Active Auctions</h1>
                <p className='py-2'>Discover and bid on extraordinary items</p>
            


                <div className='flex gap-10 py-1'>

                    <Sub1 EventHandaler={EventHandaler}  colorchange={likedItems} className="w-[70%]"></Sub1>
                    <Sub2 RemoveEventHandaler={RemoveEventHandaler} savedItems={savedItems}  className="w-[30%]"></Sub2>

                </div>

            </div>


        </div>
    );
};

export default Main1;