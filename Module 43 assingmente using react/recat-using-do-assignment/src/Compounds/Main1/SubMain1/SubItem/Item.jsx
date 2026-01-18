import React from 'react';
import { CiHeart } from "react-icons/ci";

const Item = ({ items, EventHandaler, colorchange, isDisabled }) => {




    return (
        <div>
            <div className="card bg-base-100 w-72 shadow-sm border border-blue-800">
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

                    <div className="card-actions" >
                        <CiHeart className={` cursor-pointer ${isDisabled.includes(items.id) ? "pointer-events-none opacity-50" : ""} ${colorchange.includes(items.id) ? "text-blue-800" : ""}`} onClick={() =>  EventHandaler(items)} size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;