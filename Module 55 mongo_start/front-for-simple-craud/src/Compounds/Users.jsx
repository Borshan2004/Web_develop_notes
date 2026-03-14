import React from 'react';

const Users = () => {




    const handleonsumbit=(e)=>{

        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        const users = {name,email}
        console.log(users)

        
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(users)
        })
        .then(res=>res.json())
        .then(data=>console.log("hello this is the running data",data))


    }

    return (
        <div>
            <form onSubmit={handleonsumbit}>
                <input type="text" name='name' placeholder='name' />
                <input type='email' name='email' placeholder='email'></input>
                <button>submit</button>
            </form>
            
        </div>
    );
};

export default Users;