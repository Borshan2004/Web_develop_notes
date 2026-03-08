
import React, { useEffect, useState, useRef } from 'react';
import { useLoaderData } from 'react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Icons for buttons
import TrendingCard from './TrendingCard';
import './Trendingdatastore.css'

const Trendingdatastore = () => {
    const [dataT, setDataT] = useState([]);
    const data = useLoaderData();


    // 1. Create a ref for the scrollable container
    const scrollContainerRef = useRef(null);


    // 2. Function to handle scrolling
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 400;

            // Check if we are at the end of the scroll
            const isAtEnd = current.scrollLeft + current.offsetWidth >= current.scrollWidth - 10;

            if (direction === 'right') {
                if (isAtEnd) {
                    // If at the end, jump back to the start
                    current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            } else {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
    };


    useEffect(() => {
        const trendingdata = data.filter(eachdata => eachdata.isTrending === true);
        // Fixed: Directly set the filtered array
        setDataT(...dataT,trendingdata);

        // Create an interval to scroll right every 5000ms
        const autoScroll = setInterval(() => {
            scroll('right');
        }, 5000);

        // Cleanup: Clear the interval if the user leaves the page
        return () => clearInterval(autoScroll);
    }, [data]);



    return (
        <div className="relative group">
            {/* 3. Navigation Buttons */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Trending Apps</h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="btn btn-circle btn-sm bg-neutral-800 border-neutral-700 hover:bg-primary text-white"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="btn btn-circle btn-sm bg-neutral-800 border-neutral-700 hover:bg-primary text-white"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* 4. Scrollable Container with Ref */}
            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            >
                {dataT.map(datashow => (
                    <div key={datashow.id} className="shrink-0 snap-start">
                        <TrendingCard data={datashow} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trendingdatastore;