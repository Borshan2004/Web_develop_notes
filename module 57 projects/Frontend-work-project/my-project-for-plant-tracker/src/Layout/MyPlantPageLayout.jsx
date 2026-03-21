import React from 'react';
import Navbar from '../Compound/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Compound/Footer';

const MyPlantPageLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MyPlantPageLayout;