import React, { use } from 'react';
import { Moneydata } from '../../Grandpa';


const Child1 = () => {

    const [money,setmoney] = use(Moneydata);

    const moneywork =()=>{
        setmoney(money+1000);
    }

    return (
        <div className='boderwork'>
            <p>Child1</p>
            <button onClick={moneywork}>1000</button>
        </div>
    );
};

export default Child1;