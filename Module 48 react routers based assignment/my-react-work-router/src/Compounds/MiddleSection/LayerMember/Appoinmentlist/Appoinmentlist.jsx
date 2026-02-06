import React, {  useEffect, useState } from 'react';
import { useLoaderData} from 'react-router';
import { getexitstingdata } from '../../../../addlocal/addlocal';
import EachAppoiment from './EachAppoiment/EachAppoiment';


const Appoinmentlist = () => {


    

    const apidata =useLoaderData();

      
    const [prevStore,setprevStore] = useState([]);


    
     useEffect(() => {

        const localdata = getexitstingdata();
        const localdata_int = localdata.map(id => parseInt(id));
        const readlistdata = apidata.filter(book => localdata_int.includes(book.id));
        setprevStore(readlistdata);


    }, []);
    
   
    console.log(prevStore);
   


    return (
        <div>
            {
                prevStore.map(aplist=><EachAppoiment key={aplist.id} apdata={aplist}></EachAppoiment>)
            }
            

        </div>
    );
};

export default Appoinmentlist;