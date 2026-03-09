import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Creating account for:", formData);
        // Add registration logic here
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">

            {/* Background Ambient Glow */}
            <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-5%] left-[-5%] w-[35%] h-[35%] bg-purple-600/10 rounded-full blur-[100px]"></div>

            {/* Brand Identity */}
            <div className="flex items-center gap-3 mb-8 z-10 cursor-pointer" onClick={() => navigate('/')}>
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                    <span className="text-white font-black text-xl italic">bp</span>
                </div>
                <h1 className="text-2xl font-black tracking-tighter text-white">
                    bp<span className="text-primary">funstore</span>
                </h1>
            </div>

            {/* Registration Card */}
            <div className="card w-full max-w-lg bg-[#161616] border border-white/5 shadow-2xl z-10">
                <div className="card-body p-8 sm:p-10">
                    <h2 className="text-2xl font-bold text-center mb-1 text-white">Create Account</h2>
                    <p className="text-gray-500 text-center text-sm mb-8 italic">Join the community and start discovering.</p>

                    <form onSubmit={handleRegister} className="space-y-4">
                        {/* Full Name */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-gray-400 font-semibold text-xs uppercase">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="John Doe"
                                className="input input-bordered w-full bg-[#0a0a0a] border-white/10 focus:border-primary text-white"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-gray-400 font-semibold text-xs uppercase">Email Address</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                className="input input-bordered w-full bg-[#0a0a0a] border-white/10 focus:border-primary text-white"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Password Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-gray-400 font-semibold text-xs uppercase">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full bg-[#0a0a0a] border-white/10 focus:border-primary text-white"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-gray-400 font-semibold text-xs uppercase">Confirm</span>
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full bg-[#0a0a0a] border-white/10 focus:border-primary text-white"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="form-control py-2">
                            <label className="label cursor-pointer justify-start gap-3">
                                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm border-white/20" required />
                                <span className="label-text text-gray-500 text-xs">I agree to the <span className="text-primary hover:underline">Terms of Service</span></span>
                            </label>
                        </div>

                        {/* Register Button */}
                        <button type="submit" className="btn btn-primary w-full rounded-2xl h-14 text-lg font-bold shadow-lg mt-2">
                            Create Account
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        Already have an account? <button onClick={() => navigate('/login')} className="text-primary font-bold hover:underline">Sign In</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;