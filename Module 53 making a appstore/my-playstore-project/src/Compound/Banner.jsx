import React, { useState, useEffect, useCallback } from 'react';
import Searchbar from '../Elements/Searchbar';

const slides = [
    {
        id: 1,
        badge: { icon: "🚀", label: "JUST DROPPED" },
        title: <><span style={{ color: "#fff" }}>New Arrivals </span><span style={{ fontWeight: 800 }}>Are Here</span></>,
        description: "Fresh games, toys & collectibles added every week. Be the first to explore what's new!",
        buttonLabel: "SHOP NEW ARRIVALS →",
        accentColor: "#7c3aed",
        gemColor: "#7c3aed",
        gemInner: "#c4b5fd",
        bg: "linear-gradient(135deg, #1a0a2e 0%, #0d0d1a 60%, #1a1a2e 100%)",
        extra: (
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none"
                style={{ opacity: 0.18, position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)" }}>
                <circle cx="60" cy="60" r="55" stroke="#a78bfa" strokeWidth="1.5" />
                <circle cx="60" cy="60" r="38" stroke="#a78bfa" strokeWidth="1" />
                <circle cx="104" cy="28" r="2.5" fill="#a78bfa" />
                <circle cx="112" cy="48" r="1.5" fill="#a78bfa" />
                <circle cx="95" cy="18" r="1.5" fill="#a78bfa" />
            </svg>
        ),
    },
    {
        id: 2,
        badge: { icon: "⚡", label: "LIMITED TIME" },
        title: <><span style={{ color: "#fff" }}>Big Deals, </span><span style={{ color: "#22d3ee", fontWeight: 800 }}>Bigger</span><span style={{ color: "#fff" }}> Fun</span></>,
        description: "Grab exclusive discounts on top picks. Deals so good, they won't last — act fast!",
        buttonLabel: "BROWSE DEALS →",
        accentColor: "#0891b2",
        gemColor: "#e11d48",
        gemInner: "#fda4af",
        bg: "linear-gradient(135deg, #051923 0%, #0c1a23 60%, #071a2e 100%)",
        extra: (
            <div style={{
                position: "absolute", right: 40, top: "50%", transform: "translateY(-50%)",
                width: 90, height: 90, borderRadius: "50%", border: "5px solid #164e63",
                background: "conic-gradient(#22d3ee 0% 50%, #164e63 50% 100%)",
                display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 24px #22d3ee44"
            }}>
                <div style={{
                    width: 70, height: 70, borderRadius: "50%", background: "#051923",
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
                }}>
                    <span style={{ color: "#22d3ee", fontWeight: 900, fontSize: 22, lineHeight: 1 }}>50%</span>
                    <span style={{ color: "#67e8f9", fontSize: 11, letterSpacing: 1 }}>OFF</span>
                </div>
            </div>
        ),
    },
    {
        id: 3,
        badge: { icon: "♥", label: "COMMUNITY" },
        title: <><span style={{ color: "#fff" }}>Play Together, </span><span style={{ color: "#f472b6", fontWeight: 800 }}>Win</span><span style={{ color: "#fff" }}> Together</span></>,
        description: "Join thousands of players on bpfunstore. Share finds, unlock rewards & have more fun!",
        buttonLabel: "JOIN THE COMMUNITY →",
        accentColor: "#be185d",
        gemColor: "#0ea5e9",
        gemInner: "#7dd3fc",
        bg: "linear-gradient(135deg, #1a0a1a 0%, #110d1a 60%, #1a0d23 100%)",
        extra: (
            <div style={{
                position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)",
                display: "flex", alignItems: "center"
            }}>
                {[{ label: "JK", bg: "#7c3aed" }, { label: "MR", bg: "#be185d" },
                { label: "AL", bg: "#0ea5e9" }, { label: "PQ", bg: "#059669" }, { label: "+8k", bg: "#374151" }
                ].map((av, i) => (
                    <div key={av.label} style={{
                        width: 38, height: 38, borderRadius: "50%", background: av.bg,
                        border: "2.5px solid #1a0a1a", display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 11, fontWeight: 700, color: "#fff", marginLeft: i === 0 ? 0 : -10, zIndex: 5 - i
                    }}>
                        {av.label}
                    </div>
                ))}
            </div>
        ),
    },
];

const Gem = ({ color, innerColor, size = 60 }) => (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none"
        style={{ filter: `drop-shadow(0 0 12px ${color}88)` }}>
        <polygon points="27,4 50,18 50,36 27,50 4,36 4,18" fill={color} opacity="0.85" />
        <polygon points="27,4 40,18 27,22 14,18" fill={innerColor} opacity="0.5" />
        <polygon points="27,22 40,18 50,36 27,50" fill={color} opacity="0.6" />
        <polygon points="27,22 14,18 4,36 27,50" fill={innerColor} opacity="0.3" />
    </svg>
);

const Badge = ({ icon, label, accentColor }) => (
    <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: `${accentColor}22`, border: `1px solid ${accentColor}55`,
        borderRadius: 6, padding: "8px 15px", marginBottom: 10
    }}>
        <span style={{ fontSize: 25 }}>{icon}</span>
        <span style={{
            color: accentColor === "#0891b2" ? "#22d3ee" : accentColor === "#be185d" ? "#f472b6" : "#a78bfa",
            fontSize: 35, fontWeight: 700, letterSpacing: 3
        }}>{label}</span>
    </div>
);

const SlideContent = ({ slide, animating, direction }) => (
    <div className={`carousel-slide${animating ? (direction === "next" ? " animating-next" : " animating-prev") : ""}`}
        style={{
            position: "relative", zIndex: 2, display: "flex", alignItems: "center",
            gap: 24, padding: "75px 160px 45px 45px"
        }}>
        <div style={{ flexShrink: 0 }}>
            <Gem color={slide.gemColor} innerColor={slide.gemInner} size={60} />
        </div>
        <div style={{ flex: 1 }}>
            <Badge icon={slide.badge.icon} label={slide.badge.label} accentColor={slide.accentColor} />
            <h2 style={{
                margin: "0 0 8px", fontSize: 35, fontWeight: 800, letterSpacing: 0.5,
                lineHeight: 1.2, color: "#fff"
            }}>{slide.title}</h2>
            <p style={{
                margin: "0 0 16px", color: "#94a3b8", fontSize: 20, lineHeight: 1.6,
                maxWidth: 360
            }}>{slide.description}</p>
            <button className="cta-btn" style={{
                background: slide.accentColor, color: "#fff",
                border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 15, fontWeight: 800,
                letterSpacing: 1.5, cursor: "pointer", transition: "filter 0.2s, transform 0.2s",
                boxShadow: `0 4px 16px ${slide.accentColor}55`
            }}>
                {slide.buttonLabel}
            </button>
        </div>
    </div>
);

const NavControls = ({ current, total, accentColor, onPrev, onNext, onDot }) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 20 }}>
        <button className="nav-btn" onClick={onPrev}
            style={{
                width: 40, height: 40, borderRadius: "50%", background: "#1e1e32",
                border: "1.5px solid #334155", color: "#94a3b8", fontSize: 18, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "transform 0.15s, filter 0.15s"
            }}>‹</button>
        <div style={{ display: "flex", gap: 8 }}>
            {Array.from({ length: total }).map((_, i) => (
                <button key={i} className="dot" onClick={() => onDot(i)}
                    style={{
                        width: i === current ? 24 : 8, height: 8, borderRadius: 4,
                        background: i === current ? accentColor : "#334155", border: "none",
                        cursor: "pointer", padding: 0, transition: "width 0.3s, background 0.3s",
                        boxShadow: i === current ? `0 0 8px ${accentColor}88` : "none"
                    }} />
            ))}
        </div>
        <button className="nav-btn" onClick={onNext}
            style={{
                width: 40, height: 40, borderRadius: "50%", background: "#1e1e32",
                border: "1.5px solid #334155", color: "#94a3b8", fontSize: 18, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "transform 0.15s, filter 0.15s"
            }}>›</button>
    </div>
);

const Banner = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("next");

    const go = useCallback((dir) => {
        if (animating) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setCurrent((c) => dir === "next" ? (c + 1) % slides.length : (c - 1 + slides.length) % slides.length);
            setAnimating(false);
        }, 300);
    }, [animating]);

    const goTo = useCallback((i) => {
        if (i === current || animating) return;
        setDirection(i > current ? "next" : "prev");
        setAnimating(true);
        setTimeout(() => { setCurrent(i); setAnimating(false); }, 300);
    }, [current, animating]);

    useEffect(() => {
        const t = setInterval(() => go("next"), 4500);
        return () => clearInterval(t);
    }, [go]);

    const slide = slides[current];

    return (
        <div style={{
            fontFamily: "'Barlow Condensed', sans-serif", background: "#0a0a0f",
            // minHeight: "100vh,"
             display: "flex",flexDirection: "column",  alignItems: "center", justifyContent: "center",
            padding: 40
        }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&display=swap');
        .carousel-slide { transition: opacity 0.3s, transform 0.3s; }
        .carousel-slide.animating-next { opacity: 0; transform: translateX(40px); }
        .carousel-slide.animating-prev { opacity: 0; transform: translateX(-40px); }
        .nav-btn:hover { transform: scale(1.12); filter: brightness(1.3); }
        .cta-btn:hover { filter: brightness(1.15); transform: translateY(-1px); }
        .dot:hover { transform: scale(1.4); }
      `}</style>

            <div style={{ width: "100%", maxWidth: 1580 }}>
                <div style={{
                    position: "relative", borderRadius: 16, overflow: "hidden",
                    background: slide.bg, border: `1px solid ${slide.accentColor}33`,
                    boxShadow: `0 0 40px ${slide.accentColor}22, 0 8px 40px #00000066`,
                    minHeight: 400, transition: "background 0.4s, border 0.4s, box-shadow 0.4s"
                }}>
                    {slide.extra}
                    <SlideContent slide={slide} animating={animating} direction={direction} />
                </div>
                <NavControls
                    current={current}
                    total={slides.length}
                    accentColor={slide.accentColor}
                    onPrev={() => go("prev")}
                    onNext={() => go("next")}
                    onDot={goTo}
                />
            </div>

           
           <div className='p-12'>
            <Searchbar></Searchbar>
           </div>

        </div>

        

    );
};

export default Banner;
