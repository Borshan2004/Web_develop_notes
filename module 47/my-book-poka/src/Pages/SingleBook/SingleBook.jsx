import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const SingleBook = ({ bookitemloader }) => {
    return (
        <div >
            <Link to={`/bookdetails/${bookitemloader.bookId}`}>
            
            <div className="card bg-base-100 w-96 h-137.5 shadow-sm border-2 border-gray-100">
                <figure className='bg-gray-100 m-8'>
                    <img className='h-96 w-64 m-6'
                        src={bookitemloader.image}
                        alt="Shoes" />
                </figure>

                <div>
                    {
                        bookitemloader.tags.map((tag, index) => <button key={index} className="btn btn-xs mr-2">{tag}</button>)
                    }
                </div>

                <div className="card-body">
                    <h2 className="card-title">
                        {bookitemloader.bookName}
                        <div className="badge badge-secondary">{bookitemloader.yearOfPublishing}</div>
                    </h2>
                    <p>Booked by: {bookitemloader.publisher}</p>
                    <div className='border-t border-dashed'>

                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{bookitemloader.category}</div>
                        <div className='flex gap-3'>
                            <FaStarHalfAlt size="1.5em" />{bookitemloader.rating}</div>
                    </div>
                </div>
            </div>

            </Link>
            
        </div>
    );
};

export default SingleBook;