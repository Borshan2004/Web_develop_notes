import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const location = useLocation();

  const {EmailpassAuLogin} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with:", email, password);

    EmailpassAuLogin(email,password)
    .then(res=>console.log(res))
    .catch(error=>{
      console.log(error)
    })

    navigate(`${location.state? location.state :'/'}`); 
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Decorative Glow Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>

      {/* Brand Logo */}
      <div className="flex items-center gap-3 mb-8 z-10">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)]">
            <span className="text-white font-black text-xl italic">bp</span>
        </div>
        <h1 className="text-2xl font-black tracking-tighter text-white">
          bp<span className="text-primary">funstore</span>
        </h1>
      </div>

      {/* Login Card */}
      <div className="card w-full max-w-md bg-[#161616] border border-white/5 shadow-2xl z-10 backdrop-blur-sm">
        <div className="card-body p-8">
          <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
          <p className="text-gray-500 text-center text-sm mb-8">Enter your details to access your library</p>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-400 font-semibold text-xs uppercase">Email Address</span>
              </label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                name="email"
                className="input input-bordered w-full bg-[#0a0a0a] border-white/10 focus:border-primary text-white" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control w-full">
              <div className="flex justify-between items-center mb-1">
                <label className="label-text text-gray-400 font-semibold text-xs uppercase">Password</label>
                <a href="#" className="text-xs text-primary hover:underline">Forgot?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered w-full bg-[#0a0a0a] border-white/10 focus:border-primary text-white" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-primary w-full rounded-2xl h-14 text-lg font-bold shadow-lg hover:shadow-primary/20 mt-4">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-gray-600 text-[10px] uppercase font-bold my-6 italic">Or continue with</div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="btn btn-outline border-white/10 hover:bg-white/5 text-white normal-case rounded-2xl">
              Google
            </button>
            <button className="btn btn-outline border-white/10 hover:bg-white/5 text-white normal-case rounded-2xl">
              GitHub
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            New to bpfunstore? <a href="#" className="text-primary font-bold hover:underline"><Link to='/auth/signin'>Create Account</Link></a>
          </p>
        </div>
      </div>

      {/* Footer link back to Home */}
      <button 
        onClick={() => navigate('/')} 
        className="mt-8 text-gray-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
      >
        ← Back to Store
      </button>
    </div>
  );
};

export default LoginPage;