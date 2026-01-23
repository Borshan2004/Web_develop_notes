import React from 'react';
import { Link, NavLink } from "react-router";
import './Header.css'

const Header = () => {
    return (
        <div>
            Hello this is header
            <nav>
                
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Mobile">Mobile</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                
            </nav>

            {/* <a href="/">Home</a>
            <a href="/Mobile">Mobile</a> */}

        </div>
    );
};

export default Header;