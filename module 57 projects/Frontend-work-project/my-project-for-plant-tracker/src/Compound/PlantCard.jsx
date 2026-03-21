import React from 'react';

const PlantCard = ({ plant }) => {
    const { plantName, image, category, careLevel, description } = plant;

    return (
        <div className="card bg-base-100 shadow-sm border border-green-100 rounded-3xl overflow-hidden hover:shadow-md transition-shadow duration-300">
            {/* Image Section */}
            <figure className="px-4 pt-4">
                <img
                    src={image}
                    alt={plantName}
                    className="rounded-2xl h-48 w-full object-cover"
                />
            </figure>

            {/* Content Section */}
            <div className="card-body p-6">
                <div className="flex justify-between items-start">
                    <h2 className="card-title text-emerald-900 font-bold text-xl">
                        {plantName}
                    </h2>
                    <div className="badge badge-outline border-emerald-600 text-emerald-700 capitalize">
                        {category}
                    </div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 my-2">
                    {description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Care:</span>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        {careLevel}
                    </span>
                </div>

                <div className="card-actions justify-end">
                    <button className="btn bg-[#006d44] hover:bg-[#005a38] text-white border-none btn-block rounded-xl">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;