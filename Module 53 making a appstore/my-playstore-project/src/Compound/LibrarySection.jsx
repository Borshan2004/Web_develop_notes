import React, { useEffect, useState } from 'react';

const LibrarySection = ({data}) => {


    const [newdata,setNewdata] = useState([]);


    const categories = [
        { label: 'Screenshots', count: 90, color: 'text-purple-500' },
        { label: 'Games', count: 50, color: 'text-purple-500' },
    ];


    useEffect(()=>{
        const databroker = data.filter(d=>d.rating===4.5)
        setNewdata(databroker);
    },[])
    console.log(newdata)

    

    // const games = [
    //     { id: 1, name: 'Eclipse Legends', rating: '4.9', downloads: '20K', img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=100&h=100&fit=crop' },
    //     { id: 2, name: 'Sunset Surfer', rating: '4.9', downloads: '20K', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&h=100&fit=crop' },
    //     { id: 3, name: 'Mystic Havens', rating: '4.9', downloads: '20K', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop' },
    //     { id: 4, name: 'Cryptic Shadows', rating: '4.9', downloads: '20K', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop' },
    //     { id: 5, name: 'Circuit Clash', rating: '4.9', downloads: '20K', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=100&fit=crop' },
    //     { id: 6, name: 'Rogue Skies', rating: '4.9', downloads: '20K', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=100&h=100&fit=crop' },
    // ];

    return (
        <div className="min-h-screen bg-base-100 p-5 font-sans text-white">
            <div className="max-w-md mx-auto space-y-14">

                {/* 1. Header Stats Chips */}
                <div className="grid grid-cols-2 gap-4">
                    {categories.map((item) => (
                        <div key={item.label} className="flex justify-between items-center bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.03] p-4 rounded-2xl transition-all active:scale-[0.98]">
                            <span className="text-gray-400 text-sm font-semibold">{item.label}</span>
                            <span className={`${item.color} font-black text-lg tracking-tight`}>{item.count}</span>
                        </div>
                    ))}
                </div>

                {/* 2. Groups Preview Section */}
                <div className="flex gap-4 overflow-x-auto pb-1 no-scrollbar">
                    <div className="bg-[#141414] p-4 rounded-[2rem] border border-white/[0.03] min-w-[165px] flex flex-col gap-3">
                        <div className="flex justify-between items-center px-1">
                            <span className="text-[13px] font-bold text-gray-300">Groups</span>
                            <span className="text-purple-500 font-bold text-sm">40</span>
                        </div>
                        <div className="flex -space-x-3 items-center pl-1">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1a1a1a] to-[#2a2a2a] border-2 border-[#141414] shadow-xl" />
                            ))}
                        </div>
                    </div>

                    {/* Badges Box (Matches your screenshot layout) */}
                    <div className="bg-[#141414] p-4 rounded-[2rem] border border-white/[0.03] min-w-[165px] flex flex-col gap-3">
                        <div className="flex justify-between items-center px-1">
                            <span className="text-[13px] font-bold text-gray-300">Badges</span>
                            <span className="text-purple-500 font-bold text-sm">12</span>
                        </div>
                        <div className="flex -space-x-3 items-center pl-1">
                            {[1, 2].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-900/40 to-black border-2 border-[#141414] shadow-xl" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. My Library Section */}
                <section>
                    <div className="flex justify-between items-center mb-7 px-1">
                        <h2 className="text-2xl font-black tracking-tight text-white/95 leading-none">My Library Games</h2>
                        <button className="text-purple-500 text-sm font-bold hover:text-purple-400 transition-colors">Show All</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                        {newdata.map((game) => (
                            <div key={game.id} className="flex items-center gap-4 group cursor-pointer active:opacity-70 transition-all duration-200">
                                {/* Image Container with Glow */}
                                <div className="relative flex-shrink-0">
                                    <div className="absolute inset-0 bg-purple-600/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img
                                        src={game.banner}
                                        alt={game.name}
                                        className="w-14 h-14 rounded-[20px] object-cover relative z-10 border border-white/5 shadow-2xl"
                                    />
                                </div>

                                {/* Info Column */}
                                <div className="flex flex-col min-w-0">
                                    <h3 className="font-bold text-[15.5px] text-white/90 truncate group-hover:text-white transition-colors">
                                        {game.name}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-primary text-[11px] font-black flex items-center gap-0.5">
                                            ★ {game.rating}
                                        </span>
                                        <span className="text-white/10 text-[10px]">|</span>
                                        <div className="flex items-center gap-1.5 text-gray-500 text-[11px] font-bold tracking-tight">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            {game.downloads}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default LibrarySection;