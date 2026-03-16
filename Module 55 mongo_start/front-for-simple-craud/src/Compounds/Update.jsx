import React from 'react';
import { useLoaderData } from 'react-router';

const Update = () => {

    const userd = useLoaderData();

    
    const handleonsumbit = (e) => {

        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        const userupdate = { name, email }
       

        fetch(`http://localhost:5000/users/${userd._id}`,{

            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userupdate)


        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        


    }

    return (
        <div>
            <form onSubmit={handleonsumbit}>
                <input type="text" name='name'  defaultValue={userd.name}/>
                <input type='email' name='email'  defaultValue={userd.email}></input>
                <button>submit</button>
            </form>
        </div>
    );
};

export default Update;