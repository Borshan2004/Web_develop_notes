import React from 'react';

const SingleLayer = ({ layer }) => {
    return (
        <div>
            <div className="card w-162 bg-base-100 card-sm shadow-inner  hover:border-2 hover:border-green-100">
                <div className="card-body flex flex-row m-6 gap-16">
                    <div>
                        <img className='w-32 h-32 ' src={layer.image} alt="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex'>
                            <button className='btn w-20 h-6 text-xs rounded-2xl border-green-100 bg-green-100 text-[#09982F]'>{layer.appointmentCard.badge}</button>
                            <button className='btn w-40 h-6 text-xs rounded-2xl bg-blue-100 border-blue-100 text-[#176AE5]'>{layer.experience}</button>
                        </div>
                        <div>
                            <h1 className='textarea-xl font-bold'>{layer.name}</h1>
                            <p className='text-[#0f0f0fb3]'>{layer.speciality}</p>


                            <p className='text-[#0f0f0fb3]'>License No: BD 1245125{layer.id}</p>
                        </div>
                        <div>


                            <button className='btn w-80 h-7 rounded-2xl border-blue-100 text-[#176AE5] bg-white'>View Details</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleLayer;