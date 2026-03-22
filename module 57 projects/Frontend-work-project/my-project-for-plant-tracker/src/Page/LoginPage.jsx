import React, { useContext, useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../AuthOperationM/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { EmailPasswordLogin,Loginwithgoogle } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password)

    EmailPasswordLogin(email, password)
      .then(res => {
        console.log(res)
        toast.success('Welcome back! Logging you in...', {
        icon: '🚀',
      });
        
      })
      .catch(error => {
        console.log(error)
      })


    // Mock logic: Only "admin@example.com" with "password123" works
    // if (email === 'borshanpurification42@gmail.com' && password === 'Bp2004Bp') {
    //   toast.success('Welcome back! Logging you in...', {
    //     icon: '🚀',
    //   });
    // } else {
    //   toast.error('Invalid credentials. Did you forget your coffee today?', {
    //     style: {
    //       borderRadius: '10px',
    //       background: '#333',
    //       color: '#fff',
    //     },
    //   });
    // }
  };

  const loginwithgoogle = () => {

    Loginwithgoogle()
    .then(res=>{
      console.log(res)
    })
    .catch(error=>{
      console.log(error)
    })

    toast('Redirecting to GitHub...'), { icon: '🐙' }

  }


  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center mb-6">
            <div className="p-3 bg-primary text-primary-content rounded-xl mb-2">
              <LogIn size={32} />
            </div>
            <h2 className="card-title text-2xl font-bold">Welcome Back</h2>
            <p className="text-sm text-base-content/60">Enter your details to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="input input-bordered flex items-center gap-2">
                <Mail size={18} className="opacity-70" />
                <input
                  type="email"
                  className="grow"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="input input-bordered flex items-center gap-2">
                <Lock size={18} className="opacity-70" />
                <input
                  type="password"
                  className="grow"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-2">
              Sign In
            </button>
          </form>

          <div className="divider">OR</div>

          {/* Social Login */}
          <button
            onClick={loginwithgoogle}

          className="btn btn-outline w-full flex items-center gap-2"
          >

          Continue with Google
        </button>

        <p className="text-center text-sm mt-4">
          Don't have an account? <a className="link link-primary font-semibold">Sign Up</a>
        </p>
      </div>
    </div>
    </div >
  );
};

export default LoginPage;