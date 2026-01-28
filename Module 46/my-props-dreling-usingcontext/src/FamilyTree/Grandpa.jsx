import React, { createContext, useState } from 'react';
import Father from './Parents/Father';
import Mother from './Parents/Mother';

export const Contextdata = createContext('');
export const Moneydata = createContext('');


const Grandpa = () => {

    const data = "hello"

    const data2 = "ho"

    const [money, setmoney] = useState(0)


    return (
        <div className='boderwork'>
            <p>grand pa</p>
            <p>mony have total: {money}</p>
            <div className='flexwork'>
                <Moneydata value={[money,setmoney]}>

                <Contextdata.Provider value={data2}>
                    <Father></Father>
                </Contextdata.Provider>
            </Moneydata>


            <Mother data={data}></Mother>
        </div>

        </div >
    );
};

export default Grandpa;