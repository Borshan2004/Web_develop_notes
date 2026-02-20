import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>

            <div className="flex items-center justify-between w-full max-w-7xl mx-auto my-4">


                <div className=''>

                </div>


                <div className='flex items-center gap-8 ml-14 text-accent'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/career'>Career</NavLink>
                </div>

                <div className='flex items-center gap-2'>
                    <img src='/src/assets/user.png' alt="userpng" />
                    <button className='btn w-26 text-base-300'>Login</button>
                </div>






            </div>

        </div>
    );
};

export default Navbar;