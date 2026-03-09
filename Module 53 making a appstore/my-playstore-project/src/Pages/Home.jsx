import React from 'react';
import Banner from '../Compound/Banner';

import Trendingdatastore from '../Compound/Trendingdatastore';
import Newcatagory from '../Compound/Newcatagory';
import Newcatagory2 from '../Compound/Newcatagory2';
import Newcatagory3 from '../Compound/Newcatagory3';
import Populardatastore from '../Compound/Populardatastore';
import Fullnewpage from '../Compound/Fullnewpage';
import LoginPage from './LoginPage';
import { Section } from 'lucide-react';
import RegisterPage from './RegisterPage';

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
                <h2 className="text-3xl font-bold mt-14">Productivity</h2>
                <Newcatagory></Newcatagory>
            </section>

            <section className='mx-auto max-w-375'>
                <h2 className="text-3xl font-bold mt-14">Healthcare</h2>
                <Newcatagory2></Newcatagory2>
            </section>

            <section className='mx-auto max-w-375'>
                <h2 className="text-3xl font-bold mt-14">Education</h2>
                <Newcatagory3></Newcatagory3>
            </section>

            <section className='mx-auto max-w-375'>
                <h2 className="text-3xl font-bold mt-14">Popular App</h2>
                <Populardatastore></Populardatastore>
            </section>

            {/* <section>
                <LoginPage></LoginPage>
            </section>

            <section>
                <RegisterPage></RegisterPage>
            </section> */}
            

        </div>
    );
};

export default Home;