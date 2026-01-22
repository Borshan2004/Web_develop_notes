import React, { use } from 'react';

const Users2 = ({data}) => {

    const usedata = use(data)
    console.log(usedata);

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Users2;