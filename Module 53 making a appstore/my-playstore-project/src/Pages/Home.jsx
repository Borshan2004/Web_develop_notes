import React from 'react';
import Banner from '../Compound/Banner';

import Trendingdatastore from '../Compound/Trendingdatastore';
import Newcatagory from '../Compound/Newcatagory';

const Home = () => {
    return (
        <div >
            <section>
                <Banner></Banner>
            </section>

            <section className='mx-auto max-w-375'>
                <Trendingdatastore></Trendingdatastore>
            </section>

            <section className='mx-auto max-w-375'>
                <h2 className="text-xl font-bold">Productivity</h2>
                <Newcatagory></Newcatagory>
            </section>

            <section className='mx-auto max-w-375'>
                <h2 className="text-xl font-bold">Healthcare</h2>
                <Newcatagory></Newcatagory>
            </section>

            <section className='mx-auto max-w-375'>
                <h2 className="text-xl font-bold">Education</h2>
                <Newcatagory></Newcatagory>
            </section>

        </div>
    );
};

export default Home;