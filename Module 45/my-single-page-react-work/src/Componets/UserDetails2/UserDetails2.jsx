import React, { use } from 'react';

const UserDetails2 = ({promisedata}) => {
    
    const promisedataload = use(promisedata)

    console.log(promisedataload);

    return (
        <div>
            <p>{promisedataload.name}</p>
        </div>
    );
};

export default UserDetails2;