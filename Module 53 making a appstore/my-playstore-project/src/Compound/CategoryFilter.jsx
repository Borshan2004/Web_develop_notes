import React, { useState } from 'react';

const CategoryFilter = ({data}) => {

    console.log("hello",data)
    // 1. Define the categories
    const categories = ['All', 'Productivity', 'Healthcare', 'Education'];

    // // 2. Sample Data
    // const items = [
    //     { id: 1, name: 'Cyberpunk 2077', category: 'Action', desc: 'Open world RPG' },
    //     { id: 2, name: 'Uncharted 4', category: 'Adventure', desc: 'Treasure hunting' },
    //     { id: 3, name: 'Valorant', category: 'Shooter', desc: 'Tactical shooter' },
    //     { id: 4, name: 'Doom Eternal', category: 'Action', desc: 'Fast-paced FPS' },
    //     { id: 5, name: 'Tomb Raider', category: 'Adventure', desc: 'Survival adventure' },
    //     { id: 6, name: 'Call of Duty', category: 'Shooter', desc: 'Military FPS' },
    // ];

    // 3. State for active category
    const [activeTab, setActiveTab] = useState('All');

    // 4. Logic to filter items
    const filteredItems = activeTab === 'All' ? data : data.filter(item => item.category === activeTab);

    return (
        <div className="p-6 bg-base-100 min-h-screen text-white">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold">Categories</h2>
                
            </div>

            {/* Categories Buttons */}
            <div className="flex gap-3 mb-8 max-w-4xl mx-auto overflow-x-auto pb-2">
                {categories.map((cat) => (
                    <button key={cat} onClick={() => setActiveTab(cat)} className={`btn btn-md border-none px-8 normal-case font-medium transition-all
              ${activeTab === cat ? 'bg-primary text-white hover:bg-secondary-focus' : 'bg-neutral text-gray-400 hover:bg-neutral-focus'}`} >{cat} </button>
                ))}
            </div>


            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto p-4">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex gap-4  bg-base-300 p-3 rounded-2xl border border-white/5 hover:bg-base-200 transition-colors"
                    >
                        {/* Game Image */}
                        <div className="w-24 h-24 flex-shrink-0">
                            <img
                                src={item.banner || 'https://via.placeholder.com/150'}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        {/* Game Details */}
                        <div className="flex-1 flex flex-col">
                            <div className="flex flex-col gap-0.5 mb-2">
                                <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                                <p className="text-gray-500 text-xs font-medium">{item.publisher || "Starcruise Games"}</p>
                                <p className="text-gray-400 text-xs">{item.category}</p>

                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-primary text-xs">★</span>
                                    <span className="text-gray-300 text-xs font-semibold">4.9</span>
                                    <span className="text-gray-500 text-[10px] ml-1">112MB</span>
                                </div>
                            </div>

                            {/* Action Button - Lime Green Outline */}
                            <button className="btn btn-outline btn-xs h-8 min-h-8 border-primary text-primary hover:bg-primary  hover:text-white normal-case rounded-full w-full">
                                Install
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;