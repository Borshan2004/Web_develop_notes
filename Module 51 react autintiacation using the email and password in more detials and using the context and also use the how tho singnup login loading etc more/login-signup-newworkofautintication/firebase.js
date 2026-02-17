// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-6OR4pTh5-860L4RY3I4etU48iIzzxCY",
  authDomain: "project-2-module51.firebaseapp.com",
  projectId: "project-2-module51",
  storageBucket: "project-2-module51.firebasestorage.app",
  messagingSenderId: "616797980523",
  appId: "1:616797980523:web:fb7d98bb910e409357ae2e",
  measurementId: "G-DM1T9BT3LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);