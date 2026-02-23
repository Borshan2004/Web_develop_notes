import React from 'react';
import { Link } from 'react-router';
const Registar = () => {
    return (
        <div>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-180 h-170 border p-32 ">

                <h1 className='text-4xl text-center font-bold'>Register your account</h1>
                <hr className="border-t border-base-300 my-8" />

                <label className="label text-[20px]">Name</label>
                <input type="text" className="input w-full bg-base-300" placeholder="Name" />

                <label className="label text-[20px]">Photo Url</label>
                <input type="text" className="input w-full bg-base-300" placeholder="Email" />


                <label className="label text-[20px]">Email</label>
                <input type="email" className="input w-full bg-base-300" placeholder="Email" />

                <label className="label text-[20px]">Password</label>
                <input type="password" className="input w-full bg-base-300" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Register</button>
                <p className='text-center mt-3'>
                     Have An Account ? <Link to='/auth/login' className='text-secondary'> Login</Link>
                </p>
            </fieldset>
        </div>
    );
};

export default Registar;