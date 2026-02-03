import React from 'react';
import Header from '../Compounds/Header/Header';
import Footer from '../Compounds/Footer/Footer';
import { Outlet } from 'react-router';

const Roots = () => {
    return (
        <div>
            <div className='max-w-387.5 mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Roots;