import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-180 h-170 border p-32">

                <h1 className='text-4xl text-center font-bold'>Login wiht your account</h1>
                <hr className="border-t border-base-300 my-8" />
                <label className="label text-[20px]">Email</label>
                <input type="email" className="input w-full bg-base-300" placeholder="Email" />

                <label className="label text-[20px]">Password</label>
                <input type="password" className="input w-full bg-base-300" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
                <p className='text-center mt-3'>
                    Dont’t Have An Account ? <Link to='/auth/registar' className='text-secondary'> Register</Link> 
                </p>
            </fieldset>
        </div>
    );
};

export default Login;