import React from 'react';
import { Link, useLoaderData } from 'react-router';
// import { useNavigate } from 'react-router-dom';

const AllPlantsTable = () => {
    // const navigate = useNavigate();
    const plants = useLoaderData();

    return (

        <div className="max-w-7xl mx-auto py-12 px-4">
            {/* Header Section */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-emerald-950">Plant Inventory</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage and monitor all your botanical assets in one place.</p>
                </div>
                <div className="badge badge-lg bg-emerald-50 text-emerald-700 border-emerald-200 py-4 px-6 font-medium">
                    Total Plants: {plants?.length || 0}
                </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto bg-white rounded-4xl border border-emerald-50 shadow-sm">
                <table className="table table-zebra w-full">
                    {/* Head */}
                    <thead className="bg-emerald-50/50 text-emerald-900">
                        <tr>
                            <th className="py-5 pl-8 font-bold uppercase tracking-wider text-xs">Plant Name</th>
                            <th className="py-5 font-bold uppercase tracking-wider text-xs text-center">Category</th>
                            <th className="py-5 font-bold uppercase tracking-wider text-xs text-center">Watering (Days)</th>
                            <th className="py-5 font-bold uppercase tracking-wider text-xs text-center">Health Status</th>
                            <th className="py-5 pr-8 font-bold uppercase tracking-wider text-xs text-right">Actions</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="text-gray-700">
                        {plants?.map((plant) => (
                            <tr key={plant._id} className="hover:bg-emerald-50/30 transition-colors">
                                <td className="py-4 pl-8">
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={plant.image} alt={plant.plantName} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-emerald-950">{plant.plantName}</div>
                                            <div className="text-xs opacity-50">ID: {plant._id.slice(-6)}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <span className="badge badge-outline border-emerald-600 text-emerald-700 capitalize">
                                        {plant.category}
                                    </span>
                                </td>
                                <td className="text-center font-medium">
                                    Every {plant.wateringFrequency} days
                                </td>
                                <td className="text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <progress
                                            className="progress progress-success w-20"
                                            value={plant.healthStatus}
                                            max="100">
                                        </progress>
                                        <span className="text-xs font-bold text-emerald-600">{plant.healthStatus}%</span>
                                    </div>
                                </td>
                                <th className="pr-8 text-right">
                                    <Link to={`/allplant/details/${plant._id}`}>
                                        <button

                                            className="btn btn-sm bg-[#006d44] hover:bg-[#005a38] text-white border-none rounded-lg px-5 normal-case"
                                        >
                                            View Details
                                        </button>
                                    </Link>

                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Empty State (If no plants) */}
                {(!plants || plants.length === 0) && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 italic">No plants found in your collection.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllPlantsTable;