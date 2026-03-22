import React from 'react';
import Navbar from '../Compound/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Compound/Footer';

const Homelayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div data-theme="plant-light"  className='bg-base-100 max-w-11/12 mx-auto px-4'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Homelayout;