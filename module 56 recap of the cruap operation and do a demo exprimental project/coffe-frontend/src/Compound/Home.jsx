import React, { useState } from 'react';
import CoffeeCard from './CoffeeCard';
import { useLoaderData } from 'react-router';

const Home = () => {

    const dataload = useLoaderData();
    console.log(dataload)

    const [coffestate,setcoffestate] = useState(dataload)

    return (
        <div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    coffestate.map(data => <CoffeeCard data={data} coffestate={coffestate} setcoffestate={setcoffestate}></CoffeeCard>)
                }

            </div>

        </div>
    );
};

export default Home;