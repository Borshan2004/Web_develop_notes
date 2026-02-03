import React from 'react';

const SingleLayer = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 card-sm shadow-sm">
                <div className="card-body flex flex-row">
                    <div>
                        <img className='w-32 h-32' src="/src/assets/C002-assets/success-staffs.png" alt="" />
                    </div>
                    <div>
                        <div className='flex'>
                            <button className='btn w-20 h-6 text-xs'>Available</button>
                            <button className='btn w-40 h-6 text-xs'>5+ Years Experience</button>
                        </div>
                        <div>
                            <h1 className='textarea-xl font-bold'>Awlad Hossain</h1>
                            <p className='text-[#0f0f0fb3]'>Criminal Expert</p>
                            <div>

                                <p className='text-[#0f0f0fb3]'>License No: BD 12451254</p>
                            </div>
                        </div>
                        <button className='btn'>View Details</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleLayer;