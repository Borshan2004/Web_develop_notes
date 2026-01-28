import React from 'react';
import useInputfield from '../Hooks/useInputfield';

const HookFrom = () => {

    const [name,nameonchagework] = useInputfield('');
    const [email,emailonchagework] = useInputfield('')

    const handleronsubmit=(e)=>{

        e.preventDefault()

        console.log("submit",name,email)
        

    }


    return (



        <div>
            
            <form onSubmit={handleronsubmit}>
         
                <input type="text" placeholder='enter your name' onChange={nameonchagework} defaultValue={name} required />
                <br />
                <input type="email" placeholder='enter your email' onChange={emailonchagework} defaultValue={email} required/>
                <br />
                <input type="submit" />

            </form>

        </div>
    );
};

export default HookFrom;