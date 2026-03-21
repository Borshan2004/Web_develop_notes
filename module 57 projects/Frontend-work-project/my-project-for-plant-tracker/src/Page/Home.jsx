import React from 'react';
import BannerSlider from '../Compound/BannerSlider';
import { useLoaderData } from 'react-router';
import RecentArrivals from '../Compound/RecentArrivals';
import RecoveryKit from '../Compound/RecoveryKit';
import LowMaintenance from '../Compound/LowMaintenance';

const Home = () => {

    const plant  = useLoaderData();
    console.log(plant)

    return (
        <div>
            <BannerSlider></BannerSlider>
            <RecentArrivals plants={plant}></RecentArrivals>
            <RecoveryKit></RecoveryKit>
            <LowMaintenance></LowMaintenance>
            
        </div>
    );
};

export default Home;