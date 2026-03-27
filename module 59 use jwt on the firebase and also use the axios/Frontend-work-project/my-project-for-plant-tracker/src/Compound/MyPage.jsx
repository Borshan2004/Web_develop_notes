import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../AuthOperationM/AuthContext';
import PlantDetails2 from './PlantDeatils2';

const MyPage = () => {
    const filterdata = useLoaderData();


    const { userA } = useContext(AuthContext)

    // const filterdata = plant.filter(data => data?.email === userA?.email)
    // console.log(filterdata)

    return (
        <div>
            {
                userA ? filterdata.map(data => <PlantDetails2 plant={data}></PlantDetails2>) : <div className='my-[700px]'></div>
            }
        </div>
    );
};

export default MyPage;