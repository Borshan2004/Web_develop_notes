import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Compounds/Header/Header';
import LatestNews from '../Compounds/LatestNews/LatestNews';
import Navbar from '../Compounds/Navbar/Navbar';
import LeftAside from '../Compounds/Homework/LeftAside';
import RightAside from '../Compounds/Homework/RightAside';


const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>

                <section>
                    <Navbar></Navbar>
                </section>

            </header>


            <main className='w-full max-w-7xl mx-auto grid grid-cols-12'>
                <aside className='leftnav col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>

                <aside className='main col-span-6 mr-48'>
                    <Outlet></Outlet>
                </aside>
                <aside className='rightnav col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>


            <footer></footer>

        </div>
    );
};

export default Homelayout;