import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../AuthOperationM/AuthContext';
import PlantDetails2 from './PlantDeatils2';

const MyPage = () => {
    const plant = useLoaderData();
    

    const {userA} = useContext(AuthContext)

    const filterdata = plant.filter(data=>data?.email===userA?.email)
    console.log(filterdata)

    return (
        <div>
            {
                filterdata.map(data=><PlantDetails2 plant={data}></PlantDetails2>)
            }
        </div>
    );
};

export default MyPage;