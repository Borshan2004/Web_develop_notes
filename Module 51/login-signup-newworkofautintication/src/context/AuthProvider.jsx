import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase';


{/* when we call the Authprovider and inside the Authprovider
             what tags or elemts will stay or present that
              is called as a childern */}

const AuthProvider = ({ children }) => {


    const create_email_pass = (email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password)

    }

    const userinfo = {
        create_email_pass
    }

    return (
        <AuthContext value={userinfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;