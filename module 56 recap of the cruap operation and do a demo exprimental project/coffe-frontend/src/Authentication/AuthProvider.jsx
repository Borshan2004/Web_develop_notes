import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

const AuthProvider = ({ children }) => {

    const signupwork = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginwork = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }




    const userinfo = {

        signupwork, 
        loginwork

    }


    return (


        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;