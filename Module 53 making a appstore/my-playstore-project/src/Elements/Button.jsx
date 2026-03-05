import React, { useState } from 'react';

const Button = ({ children = 'Get Started', onClick }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                .appvault-btn {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 24px;
                    border-radius: 999px;
                    border: none;
                    cursor: pointer;
                    font-family: 'Nunito', sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                    color: #ffffff;
                    background: linear-gradient(135deg, #7c5cfc 0%, #7c5cfc 100%);
                    background-size: 200% auto;
                    box-shadow: 0 0 0px rgba(168, 85, 247, 0);
                    transition: box-shadow 0.3s ease, transform 0.2s ease, background-position 0.4s ease;
                    outline: none;
                    letter-spacing: 0.2px;
                }
                .appvault-btn:hover {
                    box-shadow:
                        0 0 16px rgba(168, 85, 247, 0.6),
                        0 0 40px rgba(236, 72, 153, 0.35),
                        0 0 60px rgba(168, 85, 247, 0.15);
                    transform: translateY(-1px) scale(1.02);
                    background-position: right center;
                    animation: shimmer 1.5s linear infinite;
                }
                .appvault-btn:active {
                    transform: translateY(0px) scale(0.98);
                    box-shadow: 0 0 10px rgba(168, 85, 247, 0.4);
                }
                .appvault-btn::before {
                    content: '';
                    position: absolute;
                    inset: -1px;
                    border-radius: 999px;
                    background: linear-gradient(135deg, #a855f7, #7c5cfc, #7c5cfc);
                    opacity: 0;
                    z-index: -1;
                    filter: blur(8px);
                    transition: opacity 0.3s ease;
                }
                .appvault-btn:hover::before {
                    opacity: 0.8;
                }
            `}</style>

            <button
                className="appvault-btn"
                onClick={onClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {children}

                {/* Arrow icon */}
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        transform: hovered ? 'translateX(3px)' : 'translateX(0)',
                        transition: 'transform 0.2s ease',
                    }}
                >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </button>
        </>
    );
};

export default Button;