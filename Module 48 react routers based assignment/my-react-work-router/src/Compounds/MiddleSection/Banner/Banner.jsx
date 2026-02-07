import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>

            <div className='main-bg h-96 flex items-center rounded-lg mt-8 mb-24 '>
                <div className='flex flex-col items-center justify-center '>
                    <h1 className='text-white text-5xl font-bold text-center mx-36 mb-4 leading-16'>It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h1>
                    <h2 className='text-white text-center mx-80'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</h2>
                </div>

            </div>

        </div>
    );
};

export default Banner;