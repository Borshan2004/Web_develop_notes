// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeokmQ7LQBM4FhV_brI6TmNLGjpXKvsog",
  authDomain: "emaii-password.firebaseapp.com",
  projectId: "emaii-password",
  storageBucket: "emaii-password.firebasestorage.app",
  messagingSenderId: "366452032521",
  appId: "1:366452032521:web:46db0b1c5f43fd54d264d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);