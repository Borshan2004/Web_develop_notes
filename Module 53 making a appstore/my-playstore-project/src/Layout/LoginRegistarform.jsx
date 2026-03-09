import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Compound/Navbar';
import Footer from '../Compound/Footer';

const LoginRegistarform = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            
            <div>
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default LoginRegistarform;