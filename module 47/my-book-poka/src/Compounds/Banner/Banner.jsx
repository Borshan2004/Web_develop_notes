import React from 'react';
import bookimage from '../../assets/books.jpg'



const Banner = () => {
    return (
        <div>

            
            <div className="hero bg-base-200  p-24 rounded-2xl ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-96' src={bookimage} alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            

        </div>
    );
};

export default Banner;