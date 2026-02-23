import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router';
import { NavLink } from 'react-router';

const Authlayout = () => {
    return (
        <div className='bg-base-300 min-h-screen w-full'>
            <nav>
                <div className="flex items-center justify-between w-full max-w-7xl mx-auto py-4">


                    <div className='bg-base-300'>

                    </div>


                    <div className='flex items-center gap-8 ml-14 text-accent bg-base-300'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/career'>Career</NavLink>
                    </div>

                    <div className='flex items-center gap-2'>
                        <img src='/src/assets/user.png' alt="userpng" />
                        <Link to="/auth/login"><button className='btn w-26 text-base-300'>Login</button></Link>

                    </div>






                </div>
            </nav>

            <main className='flex flex-col justify-center items-center w-full max-w-7xl mx-auto my-4'>
                <Outlet></Outlet>
            </main>
            

        </div>
    );
};

export default Authlayout;