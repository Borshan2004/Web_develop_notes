import React, { useState } from 'react';

const Controlledaction = () => {
//controlled componet . one per each field use state on change of the input field

    const [password,setPassword] = useState('secret');
    const [error,seterror] = useState('');

    const touchingonsubmit = (e)=>{

        e.preventDefault();
        console.log(e.target.name.value)

    }


    const chageonclick =(e)=>{
        console.log(e.target.value)
        setPassword(e.target.value);
        
        if(password.length>6){
            seterror("there is a error for password word limit")
        }
        else{
            seterror('');
        }
    }
    
    return (
        <div>
            
            <form onSubmit={touchingonsubmit}>
                <input type="name" name='name' placeholder='enter your name'  required/>
                <br />
                <input type="email" name='email' placeholder='enter your email' required />
                <br />
                <input type="pass" onChange={chageonclick} defaultValue={password} required/>
                <input type="submit" />
            </form>

            <p>{error}</p>

        </div>
    );
};

export default Controlledaction;