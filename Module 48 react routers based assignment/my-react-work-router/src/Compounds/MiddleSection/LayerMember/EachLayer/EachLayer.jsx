import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addtodata } from '../../../../addlocal/addlocal';


const EachLayer = () => {


    const { id } = useParams();

    const data = useLoaderData();

    const layerdata = data.find(layer => layer.id === parseInt(id));

    // const navigate = useNavigate();

    const handleClick = (id) => {
       
        addtodata(id);

    };


    return (
        <div className='flex flex-col justify-center items-center'>

            <div className='bg-[#f0f0f0] w-320.25 h-64 rounded-2xl p-20 '>

                <h1 className='text-center text-3xl font-bold mb-2'>Lawyer’s Profile Details</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>

            </div>

            <div className="card w-320.25 bg-base-100 card-sm shadow-inner border-2 border-green-100 mt-10">
                <div className="card-body flex flex-row m-6 gap-16">
                    <div>
                        <img className='w-64 h-64 ' src={layerdata.image} alt="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex'>

                            <button className='btn w-40 h-6 text-xs rounded-2xl bg-blue-100 border-blue-100 text-[#176AE5]'>{layerdata.experience} of experience</button>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <h1 className='text-4xl font-bold'>{layerdata.name}</h1>
                            <div className='flex items-center'>
                                <p className='text-[#0f0f0fb3] text-lg'>{layerdata.speciality}</p>


                                <p className='text-[#0f0f0fb3] text-lg'>License No: BD 1245125{layerdata.id}</p>
                            </div>

                            <div className='flex flex-wrap gap-2 justify-center items-center'>
                                <p className='text-lg'>Availability:</p>
                                <div className='mr-20'>
                                    <button className='btn w-20 h-6 text-xs rounded-2xl border-green-100 bg-green-100 text-[#09982F]'>{layerdata.availability[0]}</button>
                                    <button className='btn w-20 h-6 text-xs rounded-2xl border-green-100 bg-green-100 text-[#09982F]'>{layerdata.availability[1]}</button>
                                    <button className='btn w-20 h-6 text-xs rounded-2xl border-green-100 bg-green-100 text-[#09982F]'>{layerdata.availability[2]}</button>
                                </div>
                            </div>
                            <h1 className='text-lg'>Consultation Fee: ${layerdata.fee}</h1>


                        </div>

                    </div>
                </div>
            </div>





            <div className="card w-320.25 bg-base-100 card-sm shadow-inner border-2 border-green-100 mt-10">
                <div className="card-body flex flex-col m-6 gap-16">

                    <p className='text-3xl font-bold text-center'>Book an Appointment</p>
                    <div className="w-full border-dotted border-b  border-gray-300"></div>
                    <div className='flex'>
                        <p className='text-lg'>Availability</p>
                        <button className='btn w-44 h-6 text-xs rounded-2xl border-green-100 bg-green-100 text-[#09982F]'>Lawyer  Available Today</button>
                    </div>
                    <div className="w-full border-dotted border-b  border-gray-300"></div>
                    <button className='btn w-250 h-6 text-xs rounded-2xl border-green-100 bg-green-100 text-[#09982F]'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</button>
                    <a onClick={()=>handleClick(layerdata.id)} className="btn rounded-full bg-[#0EA106] text-[#FFFFFF] w-300 h-6 text-[20px] px-3.5 py-7 ">Book Appointment Now</a>
                </div>
            </div>


        </div>
    );
};

export default EachLayer;