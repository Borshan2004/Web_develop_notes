import React from 'react';
import Banner from '../../Compounds/Banner/Banner';
import { useLoaderData } from 'react-router';
import Book from '../../Pages/Book/Book';

const Home = () => {

    const bookloader = useLoaderData();

    

    return (
        <div>
            <Banner></Banner>
            <Book bookloader={bookloader}></Book>
        </div>
    );
};

export default Home;