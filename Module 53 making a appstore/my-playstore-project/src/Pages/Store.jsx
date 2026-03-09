import React from 'react';
import CategoryFilter from '../Compound/CategoryFilter';
import { useLoaderData } from 'react-router';

const Store = () => {

    const data = useLoaderData();

    return (
        <div>
            <CategoryFilter data={data}></CategoryFilter>
        
        </div>
    );
};

export default Store;