import React from 'react';

import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar';


const Mainlayout = () => {
    return (
        <div>
            
            <div>
                <Navbar></Navbar>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;