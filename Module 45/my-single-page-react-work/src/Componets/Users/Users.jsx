import React from 'react';
import { useLoaderData } from 'react-router';
import Use from '../Use/Use';


const Users = () => {

    const use = useLoaderData();

    return (
        <div>
            <p>hello this is borshan user</p>
            {use.map(u => <Use use={u}></Use>)}
            
        </div>
    );
};

export default Users;