import React from 'react';

const Navbar = () => {
  const navOptions = (
    <>
      <li><a>Home</a></li>
      <li><a>All Plants</a></li>
      <li><a>Add Plant</a></li>
      <li><a>My Plants</a></li>
    </>
  );

  return (
    <div data-theme="plant-light"  className="navbar bg-base-200 shadow-lg px-4 lg:px-8">
      {/* Mobile Menu & Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold gap-0">
          <span className="text-primary">BP</span>PlantCare
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          {navOptions}
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="navbar-end gap-2">
        <a className="btn btn-outline btn-sm lg:btn-md">Login</a>
        <a className="btn btn-primary btn-sm lg:btn-md text-white">Register</a>
      </div>
    </div>
  );
};

export default Navbar;