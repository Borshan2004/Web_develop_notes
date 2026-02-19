import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Compounds/Header/Header';
import LatestNews from '../Compounds/LatestNews/LatestNews';

const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <main>
                <section className='leftnav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='rightnav'></section>
            </main>
            <footer></footer>

        </div>
    );
};

export default Homelayout;