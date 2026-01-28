import React from 'react';
import Navbar from '../../Compounds/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Compounds/Footer/Footer';

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;