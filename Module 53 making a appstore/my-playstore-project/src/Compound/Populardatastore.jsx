import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Populardatastorecard from './Populardatastorecard';

const Populardatastore = () => {

    const datas = useLoaderData();

    const [dataP, setDatap] = useState([]);

    useEffect(() => {
        const trendingdata = datas.filter(eachdata => eachdata.isPopular === true);
        // Fixed: Directly set the filtered array
        setDatap(...dataP, trendingdata);


    }, []);

    return (
        <div className=" p-6 rounded-3xl max-w-4xl">
            

            {/* Grid Layout: 1 column on mobile, 2 columns on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[500px] gap-y-6">
                {datas.map((popular) => (
                    <Populardatastorecard key={popular.id} data={popular}> </Populardatastorecard>
                ))}
            </div>
        </div>
    );
};

export default Populardatastore;