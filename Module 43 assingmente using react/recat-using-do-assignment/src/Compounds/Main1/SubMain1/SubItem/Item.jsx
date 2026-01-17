import React from 'react';
import { CiHeart } from "react-icons/ci";

const Item = ({ items,EventHandaler }) => {
    return (
        <div>
            <div className="card bg-base-100 w-72 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={items.image}
                        alt="Shoes"
                        className="rounded-xl w-56 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{items.title}</h2>

                        <p>Current Bid: ${items.currentBidPrice}</p>
                        <p>Time Left: {items.timeLeft}</p>

                    <div className="card-actions cursor-pointer">
                        <CiHeart onClick={()=>EventHandaler(items)} size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;