import React, { useContext } from 'react';
import { Contextdata } from "../../Grandpa";

const Child3 = () => {

    const newContextdata = useContext(Contextdata);

    return (
        <div className='boderwork'>
            <p>Child3 {newContextdata}</p>
        </div>
    );
};

export default Child3;