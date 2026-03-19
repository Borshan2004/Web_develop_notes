import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';


const Login = () => {

    const { loginwork } = useContext(AuthContext)

    const handleforsignin =(e)=>{

        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password)

        loginwork(email,password)
        .then(res=>{

            console.log(res)
            const update = { email, password,lastSignInTime:res.user?.metadata?.lastSignInTime}

                            fetch('http://localhost:3000/user',{
                                method:"PATCH",
                                headers:{
                                    'content-type':"application/json"
                                },
                                body:JSON.stringify(update)
                            })
                            .then(res=>res.json())
                            .then(data=>console.log(data))


        })
        .catch(error=>console.log(error))




    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
            <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">Welcome Back</h2>

                <form onSubmit={handleforsignin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-600 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="name@company.com"
                            name='email'
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-600 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="••••••••"
                            name='password'
                        />
                    </div>
                    <button className="w-full py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
                        Log In
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                    New here? <Link to="/signup" className="text-indigo-600 font-semibold hover:underline">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;