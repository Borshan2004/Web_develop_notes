import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Authmanagement/AuthContext';

const Login = () => {

    const { EmailpassAuLogin } = useContext(AuthContext)

    const navigate = useNavigate()

    const handle_click_login = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);

        EmailpassAuLogin(email, password)
            .then(res => {
                console.log(res);
                alert("login is done")
                navigate('/')
                

            })
            .catch(error => {
                console.log(error.message);
            })

    }


    return (
        <div>
            <form onSubmit={handle_click_login} className="fieldset bg-base-100 border-base-300 rounded-box w-180 h-170 border p-32">

                <h1 className='text-4xl text-center font-bold'>Login with your account</h1>
                <hr className="border-t border-base-300 my-8" />
                <label className="label text-[20px]">Email</label>
                <input name="email" type="email" className="input w-full bg-base-300" placeholder="Email" />

                <label className="label text-[20px]">Password</label>
                <input name="password" type="password" className="input w-full bg-base-300" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
                <p className='text-center mt-3'>
                    Dont’t Have An Account ? <Link to='/auth/registar' className='text-secondary'> Register</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;