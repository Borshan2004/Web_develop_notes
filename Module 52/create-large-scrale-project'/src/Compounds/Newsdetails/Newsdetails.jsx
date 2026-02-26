import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import RightAside from '../Homework/RightAside';
import { Link, useLoaderData, useParams } from 'react-router';

const Newsdetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const [newdata, setNewdata] = useState({})

    useEffect(() => {

        const findnewdata = data.find(singlenews => singlenews.id === id);
        setNewdata(findnewdata);

    }, [data, id])

   

    return (
        <div>
            <nav>
                <Header></Header>
            </nav>

            <main className='grid grid-cols-12 w-full max-w-7xl mx-auto'>
                <section className='col-span-9'>
                    <div className="  p-4 md:p-8 flex justify-center mx-10">
                        {/* Main Card Container */}
                        <div className="card w-full max-w-4xl bg-base-100 shadow-sm rounded-md border border-gray-100 overflow-hidden">

                            {/* Top Image Section */}
                            <figure className="px-6 pt-6">
                                <img
                                    src={newdata.thumbnail_url}
                                    alt="News Thumbnail"
                                    className="rounded-xl w-full object-cover max-h-100"
                                />
                            </figure>

                            {/* Content Section */}
                            <div className="card-body px-8 py-6">
                                {/* Title */}
                                <h1 className="text-2xl md:text-3xl font-extrabold text-[#444] leading-tight mb-4">
                                    {newdata.title}
                                </h1>

                                {/* Metadata / Tags */}
                                <div className="text-[13px] text-gray-500 mb-6 leading-relaxed">
                                    <span className="font-medium">Wednesday, August 24, 2022</span>
                                    <span className="mx-2">|</span>
                                </div>

                                {/* Article Text */}
                                <div className="text-gray-600 text-[15px] leading-7 space-y-4">
                                    {newdata.details}
                                </div>

                                {/* Footer / Button Section */}
                                <div className="card-actions justify-start mt-8">
                                    <Link to={`/catagory/${newdata.category_id}`} className="btn btn-md bg-[#d81b60] hover:bg-[#ad1457] text-white border-none rounded-md px-6 normal-case font-medium flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.5}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                        </svg>
                                        All news in this category
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='col-span-3'>
                    <RightAside></RightAside>
                </section>
            </main>

        </div>
    );
};

export default Newsdetails;