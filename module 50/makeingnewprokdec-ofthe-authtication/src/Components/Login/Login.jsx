import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/Firebase';
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

const Login = () => {

    const [errorM, setErrorm] = useState('');
    const [successM, setSuccessM] = useState(false);
    const [showPassword, setShowPassword] = useState(false);








    const handleSubmit = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const cheked = event.target.cheked.checked;

        if (!cheked) {
            setErrorm('Please check the remember me box');
            return;
        }

        setErrorm('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
                setSuccessM(true);
            })
            .catch(error => {
                console.log(error)
                setErrorm(error.message)
            })


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (passwordRegex.test(password) === false) {
            setErrorm('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
            return;
        }

    }

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <div className='relative '>
                                        <input name='password' type={showPassword ? "text" : "password"} className="input" placeholder="Password" />
                                        <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-8 top-2'>{showPassword ? <FaEyeLowVision /> : <FaEye />}</button>

                                    </div>

                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <div className='flex  justify-center items-center gap-5'>
                                       <input type="checkbox" defaultChecked className="checkbox" name='cheked' />
                                    <p>Remeber me</p>
                                    </div>
                                    
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                </div>

                {
                    errorM && <p className='text-red-500 text-center text-7xl'>{errorM}</p>
                }
                {
                    successM && <p className='text-green-500 text-center text-7xl'>User Created Successfully</p>
                }

            </form>





        </div>
    );
};

export default Login;