import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-[#ffffff]  p-10 border-t-2 border-blue-800 py-24">
                <aside>
                    
                    <a className="btn btn-ghost text-3xl gap-0"><span className='text-blue-800'>Auction</span> <span className='text-amber-400 font-extrabold'>Gallery</span></a>
                    <ul className='flex flex-col md:flex-row gap-2 md:gap-6 mt-4 md:mt-0 font-semibold text-lg '>
                        <li>Bid.</li>
                        <li>Win.</li>
                        <li>Own</li>
                    </ul>
                    <div className="border-t-2 border-dotted border-blue-800 w-250 my-1 "></div>
                    <ul className='flex gap-8  font-medium'>
                        <li><a>Home</a></li>
                        <li><a>Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to works</a></li>
                    </ul>

                </aside>
                <p>© 2025 AuctionHub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;