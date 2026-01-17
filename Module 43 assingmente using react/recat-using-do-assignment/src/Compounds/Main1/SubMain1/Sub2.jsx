import React from 'react';
import { CiHeart } from "react-icons/ci";
import Itemsub from './SubItem/Itemsub';




const Sub2 = ({ savedItems,RemoveEventHandaler }) => {

    console.log("Saved Items in Sub2", savedItems);



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex  items-center justify-center px-10'>
                        <div><CiHeart size={40} ></CiHeart></div>

                        <p className='text-3xl'>Favorite Items</p>

                    </div>

                    <div className='flex flex-col gap-5'>
                        {
                            savedItems.map((saveitems, index) => <Itemsub key={index} saveitems={saveitems} RemoveEventHandaler={RemoveEventHandaler} ></Itemsub>)
                        }

                    </div>

                    <div className='flex px-7 text-xl'>
                        <p>Total bids Amount:</p>
                        <p>$00000</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Sub2;