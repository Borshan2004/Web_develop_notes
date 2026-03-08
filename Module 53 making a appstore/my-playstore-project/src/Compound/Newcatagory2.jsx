import React, { useEffect, useState, useRef } from 'react';
import { useLoaderData } from 'react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Icons for buttons
import './Trendingdatastore.css'
import Newcatagorycard2 from './Newcatagorycard2';

const Newcatagory2 = () => {
    const [dataT1, setDataT1] = useState([]);
    const data1 = useLoaderData();


    // 1. Create a ref for the scrollable container
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const trendingdata = data1.filter(eachdata => eachdata.category === "Healthcare");
        // Fixed: Directly set the filtered array
        setDataT1(trendingdata);

        // Create an interval to scroll right every 5000ms
        const autoScroll = setInterval(() => {
            scroll('right');
        }, 5000);

        // Cleanup: Clear the interval if the user leaves the page
        return () => clearInterval(autoScroll);
    }, [data1]);

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

    return (
        <div className="relative group">
            {/* 3. Navigation Buttons */}
            <div className="flex justify-between items-center mb-4">
                <div></div>
                
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
                {dataT1.map(datashow => (
                    <div key={datashow.id} className="flex-shrink-0 snap-start">
                        <Newcatagorycard2 data={datashow} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Newcatagory2;


