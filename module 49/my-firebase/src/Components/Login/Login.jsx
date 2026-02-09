import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/Firebase';

const Login = () => {

    const provider = new GoogleAuthProvider()
    const provider2 = new GithubAuthProvider()

    const [users, setusers] = useState(null)
    const [user2, setuser2] = useState(null)

    const handlegooglebutton = () => {
        console.log('google button clicked');

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
                setusers(result.user)
            })
            .catch(error => {

                console.log(error)

            })
    }

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                setuser2(null)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handlegithubsignin=()=>{
        signInWithPopup(auth,provider2)
        .then(result=>{
            console.log(result.user)
            setuser2(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handlegithubsignout=()=>{

        auth.signOut()
        .then(()=>{
            setuser2(null)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>

            <p>Login Page</p>
             

            {
                users
                    ? <button onClick={handleSignOut}>Sign Out</button>
                    : <button onClick={handlegooglebutton}>Sign in with Google</button>
            }

            <button onClick={handlegithubsignin}>sign with github</button>
            <button onClick={handlegithubsignout}>signout with github</button>



            {
                users && <div>
                    <h2>Welcome {users.displayName}</h2>
                    <p>Email: {users.email}</p>
                    <img src={users.photoURL} alt="User Profile" />
                    <p>user2: {user2?.displayName}</p>
                </div>
            }

        </div>
    );

};

export default Login;