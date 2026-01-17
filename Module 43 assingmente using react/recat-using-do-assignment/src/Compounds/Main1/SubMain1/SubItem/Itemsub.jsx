import React from 'react';

const Itemsub = ({ saveitems,RemoveEventHandaler }) => {
    return (
        <div>
            <div className="card bg-base-100 w-80 shadow-sm">
                <div className="card-body">
                    <div className="card-actions justify-end">

                        <div className='pr-10'>
                            <img className='w-48 h-20' src={saveitems.image} alt="" />
                        </div>
                        
                        <button onClick={() => RemoveEventHandaler(saveitems.id)} className="btn btn-square btn-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        

                    </div>
                    <div>
                        
                        <div >
                            <p className='font-bold'>{saveitems.title}</p>
                            <div className='flex'>
                                <p>${saveitems.currentBidPrice}</p>
                                <p>Bids: {saveitems.bidsCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Itemsub;