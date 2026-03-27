import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../FIreBase/Firebase';
import axios from 'axios';

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
            if (currentUser?.email) {
                const userdata = { email: currentUser.email };
                axios.post('http://localhost:3000/jwt', userdata,{
                    withCredentials:true
                })
                    .then(res => { 
                    
                        console.log(res.data)
                    
                        // const token = res.data.token;
                        // localStorage.setItem('token',token)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
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