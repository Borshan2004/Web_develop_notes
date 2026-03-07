import React from 'react';
import { Download, Star } from 'lucide-react'; // Optional: Use lucide-react or SVG
import { Link } from 'react-router-dom';

const TrendingCard = ({data}) => {
    
    return (
        <div className="card w-md h-64 bg-base-100 shadow-xl image-full group cursor-pointer hover:border border-primary">
            {/* Background Image */}
            <figure>
                <img
                    src={data.banner}
                    alt="Demon eyes"
                    className="object-cover h-full w-full"
                />
            </figure>

            <div className="card-body justify-end p-4">
                {/* Card Title */}
                <h2 className="card-title text-white text-xl font-bold mb-0">
                    {data.name}
                </h2>

                <div className="flex items-center justify-between mt-1">
                    {/* Stats Section */}
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>4,9</span>
                        </div>
                        <div className="flex items-center gap-1 border-l border-gray-600 pl-3">
                            <Download className="w-4 h-4" />
                            <span>20K</span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="card-actions">
                        <Link
                            to="/install/demon-eyes"
                            className="btn btn-sm h-8 px-5 rounded-md border-none bg-primary hover:bg-[#55227eb5] text-white capitalize font-semibold"
                        >
                            Install
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;


