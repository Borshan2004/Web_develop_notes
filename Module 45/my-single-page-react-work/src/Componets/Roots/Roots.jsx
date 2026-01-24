import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SildeBar/SideBar';
import './root.css'

const Roots = () => {

    const navigating = useNavigation();
    const isnavigating = Boolean(navigating.location)

    return (
        <div>

           <Header></Header>
           <div className='main_work'>
            <SideBar></SideBar>

            <div className='sub_work'>
                { isnavigating && <h2>Loading.......</h2>}
                 <Outlet></Outlet>
            </div>
           
           </div>
           
           <Footer></Footer>

        </div>
    );
};


export default Roots;
