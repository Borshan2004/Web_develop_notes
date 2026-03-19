import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';


const Signup = () => {

    const { signupwork } = useContext(AuthContext)

    const handleonsumbitforregistar = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...userprofile } = Object.fromEntries(formData.entries())
        

        // const email = formData.get('email')
        // const password = formData.get('password')
       

        signupwork(email, password)
            .then(res => {
                console.log(res.user)
                
                const userprofile2 = { email, password,lastSignInTime:res.user?.metadata?.lastSignInTime, ...userprofile }

                fetch('http://localhost:3000/user',{
                  
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(userprofile2)
                })
                .then(res=>res.json())
                .then(data=>console.log(data))

            })
            .catch(error =>
                console.log(error)
            )


    }


    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 text-center mb-2">Get Started</h2>
                <p className="text-slate-500 text-center text-sm mb-8">Join our community today.</p>

                <form onSubmit={handleonsumbitforregistar} className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="md:col-span-1">
                        <label className="block text-sm font-semibold text-slate-600 mb-1">First Name</label>
                        <input type="text" name="name" className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Jane" />
                    </div>
                    <div className="md:col-span-1">
                        <label className="block text-sm font-semibold text-slate-600 mb-1">Last Name</label>
                        <input type="text" className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Doe" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-600 mb-1">Email</label>
                        <input type="email" name="email" className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="jane@example.com" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-600 mb-1">Password</label>
                        <input type="password" name='password' className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="••••••••" />
                    </div>
                    <button className="md:col-span-2 mt-2 w-full py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
                        Sign Up
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Already a member? <Link to="/login" className="text-emerald-600 font-semibold hover:underline">Sign in instead</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;