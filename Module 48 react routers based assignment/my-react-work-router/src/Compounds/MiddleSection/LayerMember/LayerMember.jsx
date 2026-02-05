import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleLayer from './SingleLayer/SingleLayer';

const LayerMember = () => {

    const loadedData = useLoaderData();
    console.log(loadedData);

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {

        setClicked(!clicked);
        console.log(clicked);

    }

    return (

        <div>
            <h1 className='text-[40px] font-bold text-center my-5'>Our Best Lawyers</h1>
            <p className='text-center mx-64 my-5'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid grid-cols-2  gap-32 lg:ml-10'>




                {
                    loadedData.map(layer => <SingleLayer
                        key={layer.id}
                        layer={layer}
                        clicked={clicked}
                    ></SingleLayer>)
                }

                <div className='flex justify-center items-center mx-187.5'>
                    <a onClick={handleClick} className="btn rounded-full bg-[#0EA106] text-[#FFFFFF] w-44 h-6 text-[20px] px-3.5 py-7 ">Show All Lawyer</a>
                </div>


            </div>


        </div>
    );
};

export default LayerMember;