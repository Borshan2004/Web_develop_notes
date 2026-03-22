// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAJfg7JUnstbF_juxpDWmiD_0-n4atRB8",
  authDomain: "plant-care-be36a.firebaseapp.com",
  projectId: "plant-care-be36a",
  storageBucket: "plant-care-be36a.firebasestorage.app",
  messagingSenderId: "358655166447",
  appId: "1:358655166447:web:07f2a5ed432171e593981a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);