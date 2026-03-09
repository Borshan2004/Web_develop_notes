import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';

const Fullnewpage = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const navigate = useNavigate();

    // 1. Core Data States
    const [gameData, setGameData] = useState(null);
    const [activeTab, setActiveTab] = useState('info'); // 'info' or 'reviews'

    // 2. Review States
    const [reviewsList, setReviewsList] = useState(() => {
        const savedReviews = localStorage.getItem(`reviews_${id}`);
        return savedReviews ? JSON.parse(savedReviews) : [
            { id: 1, user: "AlphaGamer", comment: "Amazing graphics!", date: "2 mins ago" }
        ];
    });
    const [newReview, setNewReview] = useState("");

    useEffect(() => {
        // Find the specific game from the loaded data
        const storedata = data?.find((datas) => datas.id === id);

        if (storedata) {
            // Just pass the object directly. Do NOT use ...gameData
            setGameData(storedata);
        }
        localStorage.setItem(`reviews_${id}`, JSON.stringify(reviewsList));


    }, [id, data,reviewsList]);

    // 3. Handlers
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (!newReview.trim()) return;

        const reviewObj = {
            id: Date.now(),
            user: "Guest User",
            comment: newReview,
            date: "Just now"
        };

        setReviewsList([reviewObj, ...reviewsList]);
        setNewReview(""); // Clear input
    };

    if (!gameData) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;



    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white pb-32">
            {/* --- Hero Section --- */}
            <div className="relative h-[45vh] w-full overflow-hidden">
                <img
                    src={gameData.banner}
                    className="h-full w-full object-cover scale-110"
                    alt={gameData.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40"></div>

                <div className="absolute top-6 left-6 right-6 flex justify-between z-10">
                    <button onClick={() => navigate(-1)} className="btn btn-circle btn-sm bg-black/40 border-none backdrop-blur-md">❮</button>
                    <button className="btn btn-circle btn-sm bg-black/40 border-none backdrop-blur-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            {/* --- Content Card --- */}
            <div className="relative -mt-10 bg-[#0a0a0a] rounded-t-[45px] px-6 pt-12 shadow-2xl border-t border-white/5">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black tracking-tight mb-2">{gameData.name}</h1>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                        Published by <span className="text-primary">{gameData.developer || 'Unknown'}</span> | Released in 2021
                    </p>
                </div>

                {/* --- Stats Bar --- */}
                <div className="flex justify-around items-center py-6 bg-base-200/50 rounded-3xl mb-10 border border-white/5">
                    <div className="text-center flex-1">
                        <span className="text-xl text-primary">★</span>
                        <p className="text-sm font-bold mt-1">Rating</p>
                        <p className="text-[10px] text-gray-400">4.9</p>
                    </div>
                    <div className="h-10 w-[1px] bg-white/10"></div>
                    <div className="text-center flex-1">
                        <span className="text-xl text-primary">⬇</span>
                        <p className="text-sm font-bold mt-1">Downloads</p>
                        <p className="text-[10px] text-gray-400">20K+</p>
                    </div>
                </div>

                {/* --- Tabs Switching --- */}
                <div className="flex border-b border-white/10 mb-8 justify-between px-4">
                    <button
                        onClick={() => setActiveTab('info')}
                        className={`pb-3 text-sm font-bold transition-all ${activeTab === 'info' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
                    >
                        Information
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`pb-3 text-sm font-bold transition-all ${activeTab === 'reviews' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
                    >
                        Reviews ({reviewsList.length})
                    </button>
                    <button className="pb-3 text-sm font-bold text-gray-500">Updates</button>
                </div>

                {/* --- Conditional Rendering Based on activeTab --- */}
                {activeTab === 'info' ? (
                    <div className="space-y-4 animate-fadeIn">
                        <label className="text-lg font-bold text-gray-200">Description</label>
                        <div className="bg-base-200 border border-white/5 rounded-2xl p-4 text-gray-400 leading-relaxed italic">
                            {gameData.description}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6 animate-fadeIn">
                        {/* Write a Review Input */}
                        <div className="bg-base-200 p-4 rounded-2xl border border-white/5">
                            <h3 className="font-bold mb-3 text-sm uppercase text-gray-400">Write a Review</h3>
                            <textarea
                                className="textarea w-full bg-[#0a0a0a] border-white/10 focus:border-primary text-white"
                                placeholder="What did you think of the game?"
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                            />
                            <button
                                onClick={handleReviewSubmit}
                                className="btn btn-primary btn-sm mt-3 w-full rounded-xl"
                            >
                                Submit Review
                            </button>
                        </div>

                        {/* Reviews List */}
                        <div className="space-y-4">
                            {reviewsList.map((rev) => (
                                <div key={rev.id} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-primary">@{rev.user}</span>
                                        <span className="text-[10px] text-gray-500">{rev.date}</span>
                                    </div>
                                    <p className="text-sm text-gray-300">{rev.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* --- Sticky Footer --- */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black to-transparent z-20">
                <button className="btn btn-primary w-full h-16 rounded-2xl text-lg font-black shadow-lg">
                    Install Now!
                </button>
            </div>
        </div>
    );
};

export default Fullnewpage;