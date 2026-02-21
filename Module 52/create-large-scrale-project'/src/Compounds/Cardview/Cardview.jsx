import React from 'react';
import { FaEye, FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

const Cardview = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
    } = news;

    // format date nicely
    const formattedDate = new Date(author.published_date).toDateString();

    return (
        <div className="card w-140 h-160 bg-base-100 shadow-md  border-none mb-9">

            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-base-300 ">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{author.name}</h2>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>

                </div>

                <div className='flex gap-2'>
                    <CiBookmark size={26} />
                    <CiShare2 size={26} />
                </div>

                {/* {rating?.badge && (

                    <span className="badge badge-secondary capitalize">
                        {rating.badge}

                    </span>
                )} */}
            </div>

            {/* Title */}
            <div className="px-5 pt-4">
                <h2 className="card-title text-[20px] leading-snug ">{title}</h2>
            </div>

            {/* Image */}
            <figure className="px-5 pt-5">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="rounded-xl w-full object-cover max-h-65"
                />
            </figure>

            {/* Details */}
            <div className="card-body pt-3 ">
                <p className="text-[16px] text-accent">
                    {details.length > 200 ? details.slice(0, 200) + "..." : details}
                    <span className="text-orange-500 font-semibold cursor-pointer ml-1">
                        Read More
                    </span>
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t mt-3 border-base-300">

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-orange-400">
                        {[...Array(rating.number)].map((_, i) => (
                            <FaStar size={20} key={i} />
                        ))}
                        <span className="text-gray-600 ml-1 text-[20px] text-center ">
                            {rating.number}.0
                        </span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-2 text-gray-500">
                        <FaEye />
                        <span className="text-sm">{total_view}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cardview;
