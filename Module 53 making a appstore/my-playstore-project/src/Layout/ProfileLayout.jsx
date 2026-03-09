import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Compound/Navbar';
import Footer from '../Compound/Footer';

const ProfileLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>

            </header>

            <main>
                <Outlet></Outlet>

            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ProfileLayout;