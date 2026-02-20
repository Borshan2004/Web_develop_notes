import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Catagory = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/categories.json")
            .then(res => res.json())
            .then(result => {
                setData(result);
            });
    }, []);

    return (
        <div>

            <h1 className='text-[18px]'>All Category</h1>
            <div className="grid gap-2 justify-items-start w-full">
                {
                    data.map(cata => (
                        // <NavLink className="btn bg-base-100 border-none shadow-none  text-accent w-44 hover:bg-base-300" to={`/catagory/${cata.id}`}>{cata.name}</NavLink>
                        <NavLink
                            className="btn bg-base-100 border-none shadow-none 
             text-accent w-48 hover:bg-base-300 
             flex justify-start text-left text-[18px] p-6"
                            to={`/catagory/${cata.id}`}
                        >
                            {cata.name}
                        </NavLink>
                    ))
                }
            </div>

        </div>
    );
};

export default Catagory;