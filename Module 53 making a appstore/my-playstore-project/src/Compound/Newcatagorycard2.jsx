import React from 'react';

const Newcatagorycard2 = ({data}) => {
    return (
        <div className="card w-40 bg-[#121212] shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 hover:border border-primary">
            {/* Image Section */}
            <figure className="px-3 pt-3">
                <img 
                    src={data.banner} // Replace with your image source
                    alt="Lost Realm"
                    className="w-40 rounded-xl aspect-square object-cover"
                />
            </figure>

            {/* Content Section */}
            <div className="card-body p-4 pt-2 text-white">
                <h2 className="card-title text-lg font-bold">{data.name}</h2>

                <div className="flex items-center gap-4 mt-1 opacity-80">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm font-medium">4.9</span>
                    </div>

                    {/* Divider */}
                    <div className="h-4 w-[1px] bg-gray-600"></div>

                    {/* Downloads */}
                    <div className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span className="text-sm font-medium">20K</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newcatagorycard2;