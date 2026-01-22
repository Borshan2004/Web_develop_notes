import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SildeBar/SideBar';
import './root.css'

const Roots = () => {
    return (
        <div>

           <Header></Header>
           <div className='main_work'>
            <SideBar></SideBar>
            <div className='sub_work'>
                 <Outlet></Outlet>
            </div>
           
           </div>
           
           <Footer></Footer>

        </div>
    );
};


export default Roots;
