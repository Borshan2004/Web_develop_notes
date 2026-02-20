import React from 'react';
import Marquee from 'react-fast-marquee';


const LatestNews = () => {

    return (
        <div className='flex justify-around items-center bg-base-300 w-full max-w-7xl mx-auto'>
            <p className='text-base-100 bg-secondary px-4 py-2 ml-3'>Latest</p>
            <Marquee pauseOnHover={true} speed={70}>
                <p className='font-bold p-4'>Match Highlights: Germany vs Spain...</p>
                <p className='font-bold p-4'>Match Highlights: Germany vs Spain...</p>
                <p className='font-bold p-4'>Match Highlights: Germany vs Spain...</p>
                <p className='font-bold p-4'>Match Highlights: Germany vs Spain...</p>
                <p className='font-bold p-4'>Match Highlights: Germany vs Spain...</p>
            </Marquee>




        </div>

    );
};

export default LatestNews;