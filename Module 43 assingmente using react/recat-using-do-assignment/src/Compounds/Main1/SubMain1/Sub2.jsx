import React from 'react';
import { CiHeart } from "react-icons/ci";
import Itemsub from './SubItem/Itemsub';




const Sub2 = ({ savedItems,RemoveEventHandaler,calculatedTotal }) => {

    console.log("Saved Items in Sub2", savedItems);



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex  items-center justify-center px-10'>
                        <div><CiHeart size={40} ></CiHeart></div>

                        <p className='text-3xl'>Favorite Items</p>

                    </div>

                    <div className={`flex flex-col justify-center items-center text-center my-4 py-4 border border-blue-800 ${savedItems.length > 0 ? "hidden" : ""}`}>
                        <p className='text-xl'>No favorites yet</p>
                        <p>Click the heart icon on any item to add it to your favorites</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        {
                            savedItems.map((saveitems, index) => <Itemsub key={index} saveitems={saveitems} RemoveEventHandaler={RemoveEventHandaler} ></Itemsub>)
                        }

                    </div>

                    <div className='flex px-7 text-xl'>
                        <p>Total bids Amount:</p>
                        <p>${calculatedTotal}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Sub2;