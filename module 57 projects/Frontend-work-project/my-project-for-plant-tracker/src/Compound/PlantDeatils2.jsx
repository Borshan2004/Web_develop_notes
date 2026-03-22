import React from 'react';
import { Calendar, Droplets, Heart, Info, ArrowLeft } from 'lucide-react';
import {  useNavigate } from 'react-router';

const PlantDetails2 = ({plant}) => {
   
    console.log(plant)
    const navigate = useNavigate();

    // Handle case where plant might be undefined
    if (!plant) return <div className="text-center py-20">Loading Plant Data...</div>;

    const {
        plantName, image, category, careLevel,
        healthStatus, lastWatered,
        nextWatering, description
    } = plant;

    return (
        <div className="min-h-screen bg-[#f3f9f1] py-8 md:py-12 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Navigation */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-emerald-800 font-semibold mb-6 hover:text-emerald-600 transition-colors"
                >
                    <ArrowLeft size={20} /> Back to Inventory
                </button>

                {/* Main Card Container */}
                <div className="bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-emerald-900/5 border border-emerald-50 flex flex-col lg:flex-row min-h-[600px]">

                    {/* Left Side: Image Section */}
                    <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-full bg-emerald-100">
                        <img
                            src={image}
                            alt={plantName}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-6 left-6">
                            <span className="badge badge-lg bg-white/90 backdrop-blur-md text-emerald-900 border-none font-bold px-5 py-5 shadow-sm capitalize">
                                {category}
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Details Section */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">

                        {/* Header Info */}
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black text-emerald-950 leading-tight">
                                    {plantName}
                                </h1>
                                <p className="text-emerald-600 font-bold text-sm tracking-wide mt-1 uppercase">
                                    {careLevel} Care Required
                                </p>
                            </div>
                            <Heart size={28} className="text-red-400 fill-red-400 mt-2" />
                        </div>

                        {/* Vitality Score */}
                        <div className="mb-8 p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-sm font-bold text-emerald-900/70 uppercase tracking-tighter">
                                    Vitality Score
                                </span>
                                <span className="text-lg font-black text-emerald-700">{healthStatus}%</span>
                            </div>
                            <progress
                                className="progress progress-success w-full h-4 shadow-inner"
                                value={healthStatus}
                                max="100">
                            </progress>
                        </div>

                        {/* About Section */}
                        <div className="mb-8">
                            <h3 className="flex items-center gap-2 text-emerald-900 font-bold mb-3">
                                <Info size={18} className="text-emerald-600" />
                                About this Variety
                            </h3>
                            <p className="text-gray-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border-l-4 border-emerald-500 italic">
                                "{description}"
                            </p>
                        </div>

                        {/* Watering Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-100 flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-emerald-700 mb-1">
                                    <Calendar size={16} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Last Watered</span>
                                </div>
                                <p className="text-md font-bold text-emerald-950">{lastWatered}</p>
                            </div>

                            <div className="bg-[#006d44] p-5 rounded-2xl shadow-lg shadow-emerald-200 flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-emerald-100 mb-1">
                                    <Droplets size={16} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Next Due</span>
                                </div>
                                <p className="text-md font-bold text-white">{nextWatering}</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="btn flex-1 bg-[#006d44] hover:bg-[#005a38] text-white border-none h-14 rounded-2xl text-md font-bold shadow-lg shadow-emerald-100 transition-all hover:scale-[1.02]">
                                Delete
                            </button>
                            <button className="btn btn-outline border-emerald-200 text-emerald-800 hover:bg-emerald-50 hover:border-emerald-400 h-14 rounded-2xl px-8 font-bold">
                                Update
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails2;