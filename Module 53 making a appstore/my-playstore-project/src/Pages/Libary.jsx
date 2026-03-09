import React from 'react';
import LibrarySection from '../Compound/LibrarySection';
import { useLoaderData } from 'react-router';

const Libary = () => {

    const data = useLoaderData()

    return (
        <div>
            <LibrarySection data={data} ></LibrarySection>
        </div>
    );
};

export default Libary;