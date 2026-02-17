import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

    const {sign_email_pass} = use(AuthContext)

    const location = useLocation();

    
    const navigate = useNavigate()

    const handleloginsubmit =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        sign_email_pass(email,password)
        .then(res=>{
            console.log(res);
            navigate( location?.state ||'/')
        })
        .then(error=>{
            console.log(error);
        })

    }

    return (
        <div>
            <form onSubmit={handleloginsubmit} className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto my-56">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
                <p>If dont have account plese <Link className='text-blue-300' to='/registar'>registar</Link> </p>
            </form>
        </div>
    );
};

export default Login;