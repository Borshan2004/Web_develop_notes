// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

// import { auth } from '../../../firebase';


const Registar = () => {

    const {create_email_pass} =use(AuthContext);

    const handleonsubmit = (event) =>{

        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        
        // createUserWithEmailAndPassword(auth,email,password)
        // .then(res=>{
        //     console.log(res);
        // })
        // .catch(error=>{
        //     console.log(error);
        // })
        create_email_pass(email,password)
        .then(res=>{
            console.log(res)
        })
        .then(error=>{
            console.log(error)
        })

    }

    return (
        <div>

            <form onSubmit={handleonsubmit} className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto my-56">
                <legend className="fieldset-legend">Registar</legend>

                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
                <p>If you have an account please login </p>
            </form>

        </div>
    );
};

export default Registar;