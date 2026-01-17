import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-[#ffffff] shadow-sm px-24">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-3xl gap-0"><span className='text-blue-800'>Auction</span> <span className='text-amber-400 font-extrabold'>Gallery</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 font-semibold text-lg">
                        <li><a>Home</a></li>
                        <li><a>Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to works</a></li>
                    </ul>
                </div>
                <div className="navbar-end">


                     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                        <div className=" rounded-full bg-gray-400 p-1">
                             <IoIosNotificationsOutline size={22} />
                        </div>
                    </div>


                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                        <div className="w-9 rounded-full ">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>


                </div>
            </div>




        </div>
    );
};

export default Navbar;