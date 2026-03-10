import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';
import Button from '../Elements/Button';




const Navbar = () => {

    const [searchFocused, setSearchFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const { useri, EmailpassSignout } = useContext(AuthContext)
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Store', path: '/store' },
        { label: 'Library', path: '/library' },
        { label: 'Profile', path: '/profile' },
    ];

    const signoutwork = (event) => {
        event.preventDefault();

        EmailpassSignout()
            .then(res => {
                alert("signout is done",res)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');
                .nav-item::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    border-radius: 999px;
                    background: linear-gradient(90deg, #a855f7, #7c5cfc);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.2s ease;
                }
                .nav-item:hover::after { transform: scaleX(1); }
                .nav-item.active::after { transform: scaleX(1); }
            `}</style>

            <nav style={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                // padding: '10px 24px',
                background: '#0d0d14',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                fontFamily: "'Nunito', sans-serif",
                minHeight: '56px',
            }}>

                {/* Logo */}
                {/* <span style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 60%, #f97316 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.5px',
                    userSelect: 'none',
                    cursor: 'pointer',
                }}>
                    AppVault
                </span> */}

                {/* <div>
                    <img className='h-32 w-64  rounded-4xl bg-base-100' src='/src/assets/banner_purple.png' alt="logo" />
                </div> */}

                <div className="flex justify-center items-center gap-3 m-7">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                        <span className="text-white font-black text-xl italic">bp</span>
                    </div>
                    <h1 className="text-2xl font-black tracking-tighter text-white">
                        bp<span className="text-primary">funstore</span>
                    </h1>
                </div>

                {/* Nav Items */}
                <div className='flex items-center gap-8 ml-5'>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                            style={({ isActive }) => ({
                                position: 'relative',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '20px',
                                fontWeight: isActive ? 700 : 500,
                                color: isActive ? '#ffffff' : '#9ca3af',
                                fontFamily: "'Nunito', sans-serif",
                                transition: 'color 0.2s ease',
                                textDecoration: 'none',
                            })}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Spacer */}
                <div style={{ flex: 1 }} />

                {/* Search Bar */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '7px 14px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.06)',
                    border: searchFocused
                        ? '1.5px solid rgba(168,85,247,0.5)'
                        : '1.5px solid rgba(255,255,255,0.08)',
                    boxShadow: searchFocused ? '0 0 0 3px rgba(168,85,247,0.12)' : 'none',
                    minWidth: '350px',
                    transition: 'all 0.2s ease',
                }}>
                    <svg width="20" height="25" viewBox="0 0 24 24" fill="none"
                        stroke={searchFocused ? '#a855f7' : '#6b7280'}
                        strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                        style={{ flexShrink: 0, transition: 'stroke 0.2s' }}>
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search apps..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            color: '#e5e7eb',
                            fontSize: '13px',
                            fontFamily: "'Nunito', sans-serif",
                            width: '100%',
                        }}
                    />
                </div>

                <div className='mr-4'>
                    {/* <button className='btn'>Login</button> */}
                    
                    {
                        useri ? <Button onClick={signoutwork}>Logout</Button> : <Link to={"/auth/login"}><Button>Login</Button></Link>
                    }


                </div>

            </nav>
        </>
    );
};

export default Navbar;