import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div>
            <div className='main-bg flex flex-col  justify-center '>
                <div className='ml-44 space-y-6'>
                    <h1 className='text-white text-6xl font-semibold'>Bid on Unique Items from<br /> Around the World</h1>
                    <p className='text-[#ffffff] text-2xl'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
                    <div>
                        <button className="btn w-44 rounded-2xl bg-[#ffffff]">Explore Auctions</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;