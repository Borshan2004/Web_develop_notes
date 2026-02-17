import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase';


{/* when we call the Authprovider and inside the Authprovider
             what tags or elemts will stay or present that
              is called as a childern */}

const AuthProvider = ({ children }) => {

    const  [user,Setuser] = useState(null);
    const  [loading,Setloading] = useState(true)


    const create_email_pass = (email,password)=>{

        Setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const sign_email_pass =(email,password)=>{

        Setloading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    const signout_email_pass = () =>{
        Setloading(true)
        return signOut(auth);
    }

    // onAuthStateChanged(auth,(currentUser)=>{
    //     if(currentUser){
    //         console.log("first if ",currentUser);
    //     }
    //     else{
    //         console.log("second else ",currentUser)
    //     }
    // })

    useEffect(()=>{

        const unsubcribe =  onAuthStateChanged(auth,(currentUser)=>{
            console.log("current user inside useEffect",currentUser);
            Setuser(currentUser);
            Setloading(false);
        })

        return () =>{
            unsubcribe();
        }

    },[])


    const userinfo = {
        user,
        loading,
        create_email_pass,
        sign_email_pass,
        signout_email_pass
    }

    return (
        <AuthContext value={userinfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;