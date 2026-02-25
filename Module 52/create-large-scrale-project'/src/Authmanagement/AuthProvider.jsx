import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';



const AuthProvider = ({ children }) => {

    const [useri,setuseri] = useState(null)

    const EmailPassAuRegistar = (email,pass)=>{

        return createUserWithEmailAndPassword(auth,email,pass);

    }

    const EmailpassAuLogin = (email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const EmailpassSignout = ()=>{
       
        return signOut(auth);
    }

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setuseri(currentUser);
        });
        return ()=>{
            unsubscribe();
        }

    },[])


    const userinfo = {
        useri,
        EmailPassAuRegistar,
        EmailpassAuLogin,
        EmailpassSignout
    }

    return (


        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;