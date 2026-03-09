import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#080808] text-gray-400 border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                <span className="text-white font-black text-sm italic">bp</span>
              </div>
              <h1 className="text-xl font-black tracking-tighter text-white">
                bp<span className="text-primary">funstore</span>
              </h1>
            </div>
            <p className="text-sm leading-relaxed italic">
              The ultimate destination for digital discovery. Explore, play, and connect with the best apps in the universe.
            </p>
            <div className="flex gap-4">
              {/* Social Icons (DaisyUI Buttons) */}
              <button className="btn btn-ghost btn-circle btn-sm bg-white/5 hover:bg-primary/20">
                <i className="fa-brands fa-discord text-white text-lg"></i>
              </button>
              <button className="btn btn-ghost btn-circle btn-sm bg-white/5 hover:bg-primary/20">
                <i className="fa-brands fa-twitter text-white text-lg"></i>
              </button>
              <button className="btn btn-ghost btn-circle btn-sm bg-white/5 hover:bg-primary/20">
                <i className="fa-brands fa-github text-white text-lg"></i>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Store Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trending Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">New Releases</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Report a Bug</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Developer Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community Guidelines</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Newsletter</h3>
            <p className="text-xs mb-4">Get notified about the latest drops.</p>
            <div className="join w-full">
              <input 
                className="input input-bordered join-item w-full bg-[#0a0a0a] border-white/10 focus:outline-none text-sm" 
                placeholder="email@example.com" 
              />
              <button className="btn btn-primary join-item px-6">Join</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest">
          <p>© 2026 bpfunstore. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;