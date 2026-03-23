import React, { useContext, useState } from 'react';
import { User, Mail, Image, Lock, UserPlus } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router';
import { AuthContext } from '../AuthOperationM/AuthContext';

import LottieLib from 'lottie-react';
const Lottie = typeof LottieLib === 'function' ? LottieLib : LottieLib?.default;

import groovyWalkAnimationi from '../assets/loties/login.json';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { EmailPasswordRegistar } = useContext(AuthContext)

  const validatePassword = (pass) => {
    const hasUpper = /[A-Z]/.test(pass);
    const hasLower = /[a-z]/.test(pass);
    const isLongEnough = pass.length >= 6;

    if (!isLongEnough) return "Password must be at least 6 characters long.";
    if (!hasUpper) return "Password must contain at least one uppercase letter.";
    if (!hasLower) return "Password must contain at least one lowercase letter.";
    return null;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;

    console.log(email, password)

    EmailPasswordRegistar(email, password)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })

    // 1. Validate Password
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      return toast.error(passwordError);
    }

    // 2. Simulate Success
    toast.success('Account created successfully! Welcome aboard.', {
      duration: 2000,
    });

    // 3. Redirect to Home after a short delay
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <Toaster position="top-center" />

      <div className="card w-full max-w-lg bg-base-100 shadow-2xl">
        <div className="card-body">
          <div className="flex flex-col items-center mb-4">
            <div className="p-3 bg-secondary text-secondary-content rounded-full mb-2">
              <UserPlus size={28} />
            </div>
            <h2 className="card-title text-2xl font-bold">Create an Account</h2>
            <p className="text-sm text-base-content/60">Join our community today</p>
          </div>

          <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="form-control md:col-span-2">
              <label className="label"><span className="label-text">Full Name</span></label>
              <div className="input input-bordered flex items-center gap-2">
                <User size={18} className="opacity-70" />
                <input name="name" type="text" className="grow" placeholder="John Doe" onChange={handleChange} required />
              </div>
            </div>

            {/* Email */}
            <div className="form-control md:col-span-1">
              <label className="label"><span className="label-text">Email</span></label>
              <div className="input input-bordered flex items-center gap-2">
                <Mail size={18} className="opacity-70" />
                <input name="email" type="email" className="grow" placeholder="john@example.com" onChange={handleChange} required />
              </div>
            </div>

            {/* Photo URL */}
            <div className="form-control md:col-span-1">
              <label className="label"><span className="label-text">Photo URL</span></label>
              <div className="input input-bordered flex items-center gap-2">
                <Image size={18} className="opacity-70" />
                <input name="photoURL" type="url" className="grow" placeholder="https://..." onChange={handleChange} />
              </div>
            </div>

            {/* Password */}
            <div className="form-control md:col-span-2">
              <label className="label"><span className="label-text">Password</span></label>
              <div className="input input-bordered flex items-center gap-2">
                <Lock size={18} className="opacity-70" />
                <input name="password" type="password" className="grow" placeholder="••••••••" onChange={handleChange} required />
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className={`badge badge-sm ${formData.password.length >= 6 ? 'badge-success' : 'badge-ghost opacity-50'}`}>6+ chars</span>
                <span className={`badge badge-sm ${/[A-Z]/.test(formData.password) ? 'badge-success' : 'badge-ghost opacity-50'}`}>Uppercase</span>
                <span className={`badge badge-sm ${/[a-z]/.test(formData.password) ? 'badge-success' : 'badge-ghost opacity-50'}`}>Lowercase</span>
              </div>
            </div>

            <div className="form-control md:col-span-2 mt-4">
              <button type="submit" className="btn btn-secondary w-full">Sign Up</button>
            </div>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account? <Link to="/login" className="link link-secondary font-semibold">Login here</Link>
          </p>
        </div>

      </div>

      <div>
        <Lottie style={{ width: '600px' }} animationData={groovyWalkAnimationi} loop={true} />
      </div>
    </div>
  );
};

export default RegisterPage;