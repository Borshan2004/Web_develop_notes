import React, { Suspense, useState } from 'react';
import { Link } from "react-router";
import UserDetails2 from '../UserDetails2/UserDetails2';
import { Navigate } from 'react-router';

const Use = ({ use }) => {

    const [showinfo, setshowinfo] = useState(false);
    const [navigatehome,setnavigatehome] = useState(false);

    const useStyle = {

        border: '2px solid blue',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'

    }


    const showdetails= ()=>{



        //here i have did the toggle
        setshowinfo(!showinfo)

    }

    const navigatehomeonclick=()=>{
        setnavigatehome(!navigatehome);
    }

    if(navigatehome){
        return <Navigate to="/"></Navigate>
    }

    const promisedata = fetch(`https://jsonplaceholder.typicode.com/users/${use.id}`).then(res=>res.json());
    
    return (
        <div style={useStyle}>

            <p>{use.name}</p>
            <p>{use.id}</p>
            <p>{use.email}</p>

            <Link to={`/users/${use.id}`}>Details</Link>
            <button onClick={showdetails}>{showinfo ? "show ingo": "not show info" }</button>

             {
                showinfo && <Suspense fallback={<h1>.....Loading</h1>}>
                    <UserDetails2 promisedata={promisedata}></UserDetails2>
                </Suspense> 
             }
             <button onClick={navigatehomeonclick}>Return to home</button>

        </div>
    );
};

export default Use;