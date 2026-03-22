import React from 'react';
import Navbar from '../Compound/Navbar';
import Footer from '../Compound/Footer';
import { Outlet } from 'react-router';

const Allplantlayout = () => {

    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Allplantlayout;