import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';



const AuthProvider = ({ children }) => {

    const [useri,setuseri] = useState(null)
    const [loader,setLoader] = useState(true);

    const EmailPassAuRegistar = (email,pass)=>{

        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,pass);
        

    }

    const EmailpassAuLogin = (email,pass)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const EmailpassSignout = ()=>{
       
        return signOut(auth);
    }

    const updateprofile = (update) =>{

        return updateProfile(auth.currentUser,update)

    }

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setuseri(currentUser);
            setLoader(false);
        });
        return ()=>{
            unsubscribe();
        }

    },[])


    const userinfo = {
        useri,
        setuseri,
        EmailPassAuRegistar,
        EmailpassAuLogin,
        EmailpassSignout,
        loader,
        setLoader,
        updateprofile
    }

    return (


        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;