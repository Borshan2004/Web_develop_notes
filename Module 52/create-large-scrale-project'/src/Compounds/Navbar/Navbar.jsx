import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Authmanagement/AuthContext';

const Navbar = () => {


    const { useri, EmailpassSignout } = useContext(AuthContext)

    const signoutwork = (event) => {
        event.preventDefault();

        EmailpassSignout()
            .then(res => {
                alert("signout is done")
            })
            .error(error => {
                console.log(error.message);
            })
    }

    return (
        <div>

            <div className="flex items-center justify-between w-full max-w-7xl mx-auto my-4">


                <div className=''>
                    {useri && useri.email}
                </div>


                <div className='flex items-center gap-8 ml-14 text-accent'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/career'>Career</NavLink>
                </div>

                <div className='flex items-center gap-2'>
                    <img src='/src/assets/user.png' alt="userpng" />
                    {
                        useri ? <button onClick={signoutwork} className='btn w-26 text-base-300'>Signout</button> : <Link to="/auth/login"><button className='btn w-26 text-base-300'>Login</button></Link>
                    }


                </div>






            </div>

        </div>
    );
};

export default Navbar;