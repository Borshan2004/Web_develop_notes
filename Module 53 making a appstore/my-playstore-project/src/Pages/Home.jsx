import React from 'react';
import Banner from '../Compound/Banner';
import Searchbar from '../Elements/Searchbar';
import TrendingCard from '../Compound/TrendingCard';
import Trendingdatastore from '../Compound/Trendingdatastore';

const Home = () => {
    return (
        <div >
            <section>
                <Banner></Banner>
            </section>

            <section className='mx-auto max-w-375'>
                <Trendingdatastore></Trendingdatastore>
            </section>

        </div>
    );
};

export default Home;