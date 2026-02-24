import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';



const AuthProvider = ({ children }) => {

    const [useri,setuseri] = useState(null)

    const EmailPassAuRegistar = (email,pass)=>{

        return createUserWithEmailAndPassword(auth,email,pass);

    }

    const userinfo = {
        useri,
        EmailPassAuRegistar,
    }

    return (


        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;