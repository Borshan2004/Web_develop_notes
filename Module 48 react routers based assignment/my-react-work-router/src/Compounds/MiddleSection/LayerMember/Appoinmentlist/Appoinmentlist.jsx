import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getexitstingdata, removedata } from '../../../../addlocal/addlocal';
import EachAppoiment from './EachAppoiment/EachAppoiment';


const Appoinmentlist = () => {




    const apidata = useLoaderData();


    const [prevStore, setprevStore] = useState([]);



    useEffect(() => {

        const localdata = getexitstingdata();
        const localdata_int = localdata.map(id => parseInt(id));
        const readlistdata = apidata.filter(book => localdata_int.includes(book.id));
        setprevStore(readlistdata);
        

    }, []);


    console.log(prevStore);


    const onclickhandler = (id) => {
        const updatedItems = prevStore.filter(item => item.id !== id);
        setprevStore(updatedItems);
        removedata(id);

    }


    return (








        <div>


            <div className='text-center my-60'>
                <p className='text-4xl font-bold mb-2'>My Today Appointments</p>
                <p className='text-xl'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>

            {
                prevStore.map(aplist => <EachAppoiment key={aplist.id} apdata={aplist} onclickhandler={onclickhandler}></EachAppoiment>)
            }


        </div>
    );
};

export default Appoinmentlist;