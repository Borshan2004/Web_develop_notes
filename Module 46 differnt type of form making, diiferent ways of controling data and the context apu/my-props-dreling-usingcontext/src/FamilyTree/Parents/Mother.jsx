import React from 'react';
import Child2 from './Childs/Child2';

const Mother = ({data}) => {
    return (
        <div className='boderwork'>
            <p>Mother</p>
            <Child2 data={data}></Child2>
        </div>
    );
};

export default Mother;