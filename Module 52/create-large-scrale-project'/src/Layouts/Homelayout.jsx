import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Compounds/Header/Header';

const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
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