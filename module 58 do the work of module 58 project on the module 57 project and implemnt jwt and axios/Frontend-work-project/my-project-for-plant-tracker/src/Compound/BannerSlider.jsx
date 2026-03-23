import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        title: "Succulent Care 101",
        subtitle: "Watering & Sunlight",
        description: "Most succulents need at least 6 hours of sun per day. Learn the 'soak and dry' method to keep them thriving.",
        bg: "bg-[#f1f8f4]",
        accent: "text-green-700",
        btn: "bg-green-700",
        img: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=800"
    },
    {
        id: 2,
        title: "The Rare Monstera",
        subtitle: "Variety Spotlight",
        description: "Discover the Variegated Monstera. Its unique white patterns make it a centerpiece for any indoor jungle.",
        bg: "bg-[#f1f8f4]",
        accent: "text-emerald-700",
        btn: "bg-emerald-700",
        img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800"
    },
    {
        id: 3,
        title: "Urban Gardening",
        subtitle: "Eco-Friendly Living",
        description: "Transform your balcony into a functional herb garden. Fresh basil and mint are just a reach away.",
        bg: "bg-[#f1f8f4]",
        accent: "text-teal-800",
        btn: "bg-teal-800",
        img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800"
    }
];

export default function BannerSlider() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((current) => (current === slides.length - 1 ? 0 : current + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div data-theme="plant-light" className="bg-base-100 flex items-center justify-center p-8">
            <div className="relative w-full max-w-11/12 mx-auto h-150 overflow-hidden rounded-3xl shadow-xl group">
                {/* Slide Track */}
                <div
                    className="flex h-full transition-transform duration-1000 ease-out"
                    style={{ transform: `translateX(-${active * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className={`min-w-full h-full flex items-center ${slide.bg} px-12 md:px-24`}>
                            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                                <div className="space-y-6">
                                    <span className={`uppercase tracking-widest text-sm font-bold ${slide.accent}`}>
                                        {slide.subtitle}
                                    </span>
                                    <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                                        {slide.title}
                                    </h1>
                                    <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                                        {slide.description}
                                    </p>
                                    <button className={`${slide.btn} text-white px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-lg`}>
                                        Start Learning
                                    </button>
                                </div>
                                <div className="hidden md:block relative">
                                    <div className="absolute -inset-4 bg-white/30 blur-2xl rounded-full"></div>
                                    <img
                                        src={slide.img}
                                        alt={slide.title}
                                        className="relative rounded-2xl object-cover h-87.5 w-full shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <button
                    onClick={() => setActive(active === 0 ? slides.length - 1 : active - 1)}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                    onClick={() => setActive(active === slides.length - 1 ? 0 : active + 1)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`transition-all duration-300 rounded-full ${active === i ? 'w-10 h-3 bg-gray-800' : 'w-3 h-3 bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}