import React from 'react';

const Header = () => {
    return (
        <div>

            <div className="navbar bg-base-100 my-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img src="/src/assets/C002-assets/logo.png" alt="" />
                    <a className=" text-[32px] font-bold ">  Law.BD</a>

                </div>

                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-[#0f0f0fb3] text-[18px] flex gap-8">
                        <li><a>Home</a></li>
                        <li><a>My-Bookings</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Contact Us</a></li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn rounded-full bg-[#0EA106] text-[#FFFFFF] w-44 h-6 text-[20px] px-3.5 py-7 ">Contact Now</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
