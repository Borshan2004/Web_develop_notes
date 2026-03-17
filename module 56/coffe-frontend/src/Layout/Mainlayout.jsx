import React from 'react';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto ">

                <Outlet ></Outlet>

            </div>

        </div>
    );
};

export default Mainlayout;