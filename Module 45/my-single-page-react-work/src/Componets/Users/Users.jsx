import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const use = useLoaderData();
    console.log(use);

    return (
        <div>
            <p>hello this is borshan user</p>
        </div>
    );
};

export default Users;