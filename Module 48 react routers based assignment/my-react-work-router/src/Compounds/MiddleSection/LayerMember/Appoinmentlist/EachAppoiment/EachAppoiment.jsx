import React from 'react';

const EachAppoiment = ({ apdata, onclickhandler }) => {
    return (
        <div>
                 


            <div className='flex justify-center'>
                <div className="card w-320.25  bg-base-100 card-sm shadow-inner border-2 border-red-200 mt-10">
                    <div className="card-body flex flex-col m-6 gap-16">

                        <div className='flex justify-between'>
                            <div>
                                <p className='text-lg font-bold'>{apdata.name}</p>
                                <p className='text-lg'>{apdata.speciality}</p>

                            </div>

                            <button className=' w-44 h-6 text-xs '>Appointment Fee : {apdata.fee}</button>
                        </div>
                        <div className="w-full border-dotted border-b  border-gray-300"></div>

                        <a className="btn rounded-full border-red-500 text-red-500 w-300 h-6 text-[20px] px-3.5 py-7 " onClick={()=>onclickhandler(apdata.id)}>Cancel Appointment</a>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default EachAppoiment;