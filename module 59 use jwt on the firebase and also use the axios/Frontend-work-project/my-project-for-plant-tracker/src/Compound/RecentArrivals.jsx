import React from 'react';
import PlantCard from './PlantCard';

const RecentArrivals = ({ plants }) => {
    return (
        <section className="my-14 py-16 px-4 md:px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-2">
                            Recent Arrivals
                        </h2>
                        <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
                    </div>
                    <button className="btn btn-ghost text-emerald-700 hidden md:flex">
                        Explore All Plants →
                    </button>
                </div>

                {/* Grid for 6 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plants.map((plant) => (
                        <PlantCard key={plant._id} plant={plant} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentArrivals;