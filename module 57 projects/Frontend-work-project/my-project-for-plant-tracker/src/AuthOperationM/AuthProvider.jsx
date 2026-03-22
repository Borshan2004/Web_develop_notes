import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../FIreBase/Firebase';

const AuthProvider = ({ children }) => {

    const [userA, setUserA] = useState(null);

    const provider = new GoogleAuthProvider()


    const EmailPasswordRegistar = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);

    }

    const EmailPasswordLogin = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const Loginwithgoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const Emailpasslogout = () => {
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserA(currentUser);
        })
        return () => {
            unsubscribe();
        }

    }, [])

    const userinfo = {
        userA,
        setUserA,
        EmailPasswordRegistar,
        EmailPasswordLogin,
        Loginwithgoogle,
        Emailpasslogout
    }

    return (

        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;