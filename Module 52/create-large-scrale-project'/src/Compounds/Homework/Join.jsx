import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import brand icons from the new package
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Join = () => {
    return (
        <div>
            <div className="join join-vertical w-full flex">
                <p className='text-[20px] mb-3'>Find us on</p>
                {/* Fixed the icon usage here */}
                 <button className="btn join-item text-[16px] text-base-200 justify-start bg-[#FFFFFF] border-2 border-base-300 h-16">
                    <FontAwesomeIcon size='2x' icon={faFacebook} className="mr-2" /> Facebook
                </button>
                
                <button className="btn join-item text-[16px]  text-base-200 justify-start bg-[#FFFFFF] border-2 border-base-300 h-16">
                    <FontAwesomeIcon  size='2x' icon={faTwitter} className="mr-2" /> Twitter
                </button>
                
                <button className="btn join-item text-[16px]  text-base-200 justify-start bg-[#FFFFFF] border-2 border-base-300 h-16">
                    <FontAwesomeIcon size='2x' icon={faInstagram} className="mr-2" /> Instagram
                </button>
            </div>
        </div>
    );
};

export default Join;