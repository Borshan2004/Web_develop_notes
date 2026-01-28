import React from 'react';
import Child1 from './Childs/Child1';
import Child3 from './Childs/Child3';

const Father = () => {
    return (
        <div className='boderwork'>
            <p>father</p>
            <div className='flexwork'>
                <Child1></Child1>
                <Child3></Child3>
            </div>

        </div>
    );
};

export default Father;