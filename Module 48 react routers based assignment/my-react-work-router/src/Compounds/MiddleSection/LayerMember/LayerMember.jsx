import React from 'react';
import { useLoaderData } from 'react-router';
import SingleLayer from './SingleLayer/SingleLayer';

const LayerMember = () => {

    const loadedData = useLoaderData();
    console.log(loadedData);

    return (

        <div>
            <div className='grid grid-cols-2  gap-32 lg:ml-10'>



                {
                    loadedData.map(layer => <SingleLayer
                        key={layer.id}
                        layer={layer}
                    ></SingleLayer>)
                }


            </div>


        </div>
    );
};

export default LayerMember;